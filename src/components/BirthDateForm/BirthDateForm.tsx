import { SubmitHandler, useForm } from "react-hook-form";
import { useStore } from "../../hooks/store";
import "./BirthDateForm.css";

export type BirthDateFormInputs = {
  BirthDate: string;
};

export function BirthDateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BirthDateFormInputs>();
  const {
    state: { birthDate },
    setBirthDate,
  } = useStore();
  const onSubmit: SubmitHandler<BirthDateFormInputs> = (data) =>
    setBirthDate(data.BirthDate);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="date" defaultValue={birthDate} {...register("BirthDate")} />
      <input type="submit" />
    </form>
  );
}
