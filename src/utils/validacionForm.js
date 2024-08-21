import { object, string } from 'yup'

let userSchema = object({
	nombre: string().min(4).required("Completa tu nombre"),
	telefono: string().min(10, "El telefono debe tener al menos 10 caracteres").required("Completa tu numero de telefono"),
	email: string().email("Formato incorrecto en el campo de email").required("completa tu email"),
	emailConfirm: string()
		.required('Fijate que los emails coincidan')
		.test('emails-match', 'Los emails no coinciden', function (value) {
			return value === this.parent.email;
		}),
});

const validateForm = async (dataForm) => {
	try {
		await userSchema.validate(dataForm, { abortEarly: false });
		return { status: "success" }
	} catch (error) {
		return { status: "error", message: error.errors.join(',') };
	}
}

export default validateForm;