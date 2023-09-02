import { useForm } from "react-hook-form";
import ApiUser from '../api/api.user';

export default function Form() {
  const { register, handleSubmit, formState: {errors, isValid } } = useForm({});

  const onSubmit = (data) => {
    ApiUser.addUser(data);
    return window.location = '/list';
  }

  return (
    <>
        <main className="container d-flex flex-column align-items-center gap-5">
        <h2>Form for Add New User</h2>
        <form className="row g-3 w-25" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" defaultValue={Date.now()} {...register("id")} />
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Name"
            {...register("name", {required: true})}
          />
          {errors.name && <span className="text-danger">Name required /!\</span>}
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            {...register("email")}
          />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            {...register("password")}
          />
          <input type="submit" disabled={!isValid} value="Add" className="form-control btn btn-primary" />
        </form>
      </main>
    </>
  )
}
