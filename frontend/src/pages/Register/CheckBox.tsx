

const CheckBox = ({ onCheckboxChange, selectedGender }: any) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Male</span>
					<input type='checkbox' className={`checkbox border-[#536dfe] ${selectedGender === "male" ? "selected" : ""}`}
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")} />
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Female</span>
					<input type='checkbox' className={`checkbox border-[#536dfe] ${selectedGender === "female" ? "selected" : ""}`}
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")} />
				</label>
			</div>
		</div>
	)
}

export default CheckBox
