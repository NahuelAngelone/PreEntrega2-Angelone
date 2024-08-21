import { object, string } from 'yup'

let userSchema = object({
	nombre: string().min(4).required("Completa tu nombre"),
	telefono: string().min(10,"El telefono debe tener al menos 10 caracteres").required("Completa tu numero de telefono"),
	email: string().email("Formato incorrecto en el campo de email").required("completa tu email"),
})

const validateForm = async (dataForm) => {
	try {
		await userSchema.validate(dataForm)
		return { status: "success" }
	} catch (error) {
		return { status: "error", message: error.message }
	}
}

export default validateForm;