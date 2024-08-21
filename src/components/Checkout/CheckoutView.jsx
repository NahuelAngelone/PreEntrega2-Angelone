const CheckoutView = ({ datosForm, handleChangeInput, handleSubmitForm }) => {
	return (

		<form onSubmit={handleSubmitForm} className="container mt-4">
			<div className="mb-3">
				<label htmlFor="nombre" className="form-label">Nombre:</label>
				<input
					type="text"
					className="form-control"
					id="nombre"
					name="nombre"
					value={datosForm.nombre}
					onChange={handleChangeInput}
					placeholder="Ingrese su nombre"
				/>
			</div>

			<div className="mb-3">
				<label htmlFor="telefono" className="form-label">Telefono:</label>
				<input
					type="text"
					className="form-control"
					id="telefono"
					name="telefono"
					value={datosForm.telefono}
					onChange={handleChangeInput}
					placeholder="Ingrese su teléfono"
				/>
			</div>

			<div className="mb-3">
				<label htmlFor="email" className="form-label">Email:</label>
				<input
					type="email"
					className="form-control"
					id="email"
					name="email"
					value={datosForm.email}
					onChange={handleChangeInput}
					placeholder="Ingrese su email"
				/>
			</div>

			<div className="mb-3">
				<label htmlFor="emailConfirm" className="form-label">Confirmación de Email:</label>
				<input
					type="email"
					className="form-control"
					id="emailConfirm"
					name="emailConfirm"
					value={datosForm.emailConfirm}
					onChange={handleChangeInput}
					placeholder="Confirme su email"
				/>
			</div>
			<div className="d-flex justify-content-center">
				<button className="btn btn-dark" type="submit">
					Finalizar Compra
				</button>
			</div>

		</form>
	)
}

export default CheckoutView;