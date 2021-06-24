import { SubmitHandler, useForm } from "react-hook-form";
import { useStore } from "../../hooks/store";
import "./BirthdayForm.css";

export type BirthdayFormInputs = {
  birthday: string;
};

export function BirthdayForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BirthdayFormInputs>();
  const {
    state: { birthday },
    setBirthday,
  } = useStore();
  const onSubmit: SubmitHandler<BirthdayFormInputs> = (data) =>
    setBirthday(data.birthday);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="date" defaultValue={birthday} {...register("birthday")} />
      <input type="submit" />
    </form>
  );
}
