import InputControl from "../../../components/InputControl";
import PropTypes from "prop-types";
export default function InputFields({ register, formState: { errors } }) {
  return (
    <>
      {fields.map(({ name, label }) => (
        <InputControl
          {...register(name)}
          key={name}
          label={label}
          fullWidth
          message={errors[name]?.message}
          size='small'
          sx={{ my: 1 }}
        />
      ))}
    </>
  );
}

InputFields.propTypes = {
  register: PropTypes.func.isRequired,
  formState: PropTypes.shape({
    errors: PropTypes.object,
  }).isRequired,
};

const fields = [
  {
    name: "classNumber",
    label: "Numéro de classification",
  },
  {
    name: "refNumber",
    label: "Numéro de référence",
  },
  {
    name: "profile",
    label: "Profil",
  },
];
