import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

export const Form = () => {

    const schema = yup.object().shape({
        fullName: yup
        .string()
        .required("Your Full Name is required!"),
        email: yup
        .string()
        .email()
        .required(),
        age: yup
        .number()
        .positive()
        .integer()
        .required(),
        password: yup
        .string()
        .min(4)
        .max(20)
        .required(),
        confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null])
        .required()
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputFullName">
                <input type="text" placeholder="Full Name..." {...register("fullName")}/>
                <p className="error">{errors.fullName?.message}</p>
            </div>
            <div className="inputEmail">
                <input type="text" placeholder="Email..." {...register("email")}/>
                <p className="error">{errors.email?.message}</p>
            </div>
            <div className="inputAge">
                <input type="number" placeholder="Age..." {...register("age")}/>
                <p className="error">{errors.age?.message}</p>
            </div>
            <div className="inputPassword">
                <input type="password" placeholder="Password..." {...register("password")}/>
                <p className="error">{errors.password?.message}</p>
            </div>
            <div className="inputConfirmPassword">
                <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
                <p className="error">{errors.confirmPassword?.message}</p>
            </div>
            <div className="inputSubmitBtn">
                <input type="submit" value="Submit"/>
            </div>
        </form>
    );
};