import React from 'react'
import { Form, withFormik, FastField, ErrorMessage } from 'formik'
import Recaptcha from 'react-google-recaptcha'
import * as Yup from 'yup'
import { Button, Input } from 'components/common'
import { Error, Center, InputField } from './styles'

const ContactForm = ({
	setFieldValue,
	isSubmitting,
	values,
	errors,
	touched,
}) => (
	<Form
		name="portfolio-dev"
		method="post"
		data-netlify="true"
		data-netlify-recaptcha="true"
		data-netlify-honeypot="bot-field"
	>
		<InputField>
			<Input
				as={FastField}
				type="text"
				name="name"
				component="input"
				aria-label="name"
				placeholder="Full name*"
				error={touched.name && errors.name}
			/>
			<ErrorMessage component={Error} name="name" />
		</InputField>
		<InputField>
			<Input
				id="email"
				aria-label="email"
				component="input"
				as={FastField}
				type="email"
				name="email"
				placeholder="Email*"
				error={touched.email && errors.email}
			/>
			<ErrorMessage component={Error} name="email" />
		</InputField>
		<InputField>
			<Input
				as={FastField}
				component="textarea"
				aria-label="message"
				id="message"
				rows="8"
				type="text"
				name="message"
				placeholder="Message*"
				error={touched.message && errors.message}
			/>
			<ErrorMessage component={Error} name="message" />
		</InputField>
		{values.name && values.email && values.message && (
			<InputField>
				<FastField
					component={Recaptcha}
					sitekey={process.env.GATSBY_CAPTCHA_KEY}
					name="recaptcha"
					onChange={value => setFieldValue('recaptcha', value)}
				/>
				<ErrorMessage component={Error} name="recaptcha" />
			</InputField>
		)}
		{values.success && (
			<InputField>
				<Center>
					<h4>
						Your message has been successfully sent!
					</h4>
				</Center>
			</InputField>
		)}
		<Center>
			<Button secondary type="submit" disabled={isSubmitting}>
				SUBMIT
			</Button>
		</Center>
	</Form>
)

export default withFormik({
	mapPropsToValues: () => ({
		name: '',
		email: '',
		message: '',
		recaptcha: '',
		success: false,
	}),
	validationSchema: () =>
		Yup.object().shape({
			name: Yup.string().required('Full name field is required'),
			email: Yup.string()
				.email('Invalid email')
				.required('Email field is required'),
			message: Yup.string().required('Message field is required'),
			recaptcha: Yup.string().required('Robots are not welcome yet!'),
		}),
	handleSubmit: async (
		{ name, email, message },
		{ setSubmitting, resetForm, setFieldValue }
	) => {
		try {
			const encode = data => {
				return Object.keys(data)
					.map(
						key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
					)
					.join('&')
			}
			const xhr = new XMLHttpRequest()
      		xhr.open('POST', process.env.GATSBY_EMAIL_API_ENDPOINT)
      		xhr.onreadystatechange = (event) => {
				const responseUrl = event.target.responseURL
				console.log(event.target.response)
				if (responseUrl === process.env.GATSBY_EMAIL_API_ENDPOINT) {
					console.log('success!')
				  } else {
					console.log('error!')
				  }

				setFieldValue('success', true)
				setTimeout(()=> {
					resetForm()
				}, 2000)
				
	  		}
			xhr.setRequestHeader('Content-Type', 'application/json')
			xhr.setRequestHeader('x-api-key', process.env.GATSBY_EMAIL_API_KEY)

      		// eslint-disable-next-line
      		let myMessage = message
        		.replace(/\n/g, '\\\\n')
        		.replace(/\r/g, '\\\\r')
				.replace(/\t/g, '\\\\t')
				.replace(`"`, `\\"`)
	
			
      		const msg = JSON.stringify({
        		to: process.env.GATSBY_EMAIL_RECEIVER,
        		body: (`${myMessage}`),
        		subject: 'jnabor.github.io contact',
        		fromname: `${name}`,
        		fromemail: `${email}`
			  })
			  
			console.log(msg)
			console.log('sending email...')
      		xhr.send(msg)
			setSubmitting(false)

		} catch (err) {
			setSubmitting(false)
			setFieldValue('success', false)
			alert('Something went wrong, please try again!') // eslint-disable-line
		}
	},
})(ContactForm)
