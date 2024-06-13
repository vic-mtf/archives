import InputControl from "../../../components/InputControl";

export default function InputFields({ register, formState: { errors } }) {
  console.log(errors);

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
