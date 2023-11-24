import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

import Layout from '../../../layout/Layout';
import { AuthLayout } from '../../layout/AuthLayout';
import Input from '../../../components/Input';


const RegisterONGPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    const { handleSubmit, values, handleChange, errors } = useFormik({
        initialValues: {
            name: '',
            username: '',
            avatar: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('El nombre es obligatorio'),
            lastName: Yup.string().required('El apellido es obligatorio'),
            avatar: Yup.string().required(),
            username: Yup.string().required(),
            email: Yup.string().email().required('El email es obligatorio'),
            password: Yup.string()
                .min(8, 'La contraseña debe tener al menos 8 caracteres')
                .required('La contraseña es obligatoria'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'La contraseña no coincide')
                .required('La confirmación de la contraseña es obligatoria'),
        }),
        onSubmit: async (values) => {
            // try {
            //     console.log('Antes de la peticion !');

            //     const newUser = {
            //         firstname: 'michael',
            //         lastname: 'michael',
            //         username: 'michael',
            //         email: 'michael@gmail.com',
            //         password: '12345a6B!',
            //         about_me: 'asdasdasdasdasdasd',
            //         workfield: 'Marketing',
            //         workingmodality: 'Hibrido',
            //     };

            //     const response = await fetch('https://api-users-ong.onrender.com/auth/user/register', {
            //         method: 'POST',
            //         body: JSON.stringify(newUser),
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //         credentials: 'same-origin',
            //         mode: 'cors',
            //         cache: 'no-cache',
            //         referrerPolicy: 'no-referrer',
            //     });


            //     console.log('El usuario se registró correctamente');
            // } catch (error) {
            //     console.log('Problemas en el registro');
            // }
        },
    });

    return (
        <Layout>
            <AuthLayout handle={handleSubmit} isLogin={false}>
                <>
                    <div className="flex flex-col md:flex-row md:gap-4">
                        <div className="w-full">
                            <Input
                                name="name"
                                id="name"
                                type="text"
                                label="Nombre"
                                placeholder="| Ingrese su nombre"
                                error={errors.name}
                                onChange={handleChange}
                                value={values.name}
                                className="w-full h-11"
                            />
                        </div>
                        <div className="w-full">
                            <Input
                                name="lastName"
                                id="lastName"
                                type="text"
                                label="Apellido"
                                placeholder="| Ingrese su apellido"
                                error={errors.lastName}
                                onChange={handleChange}
                                value={values.lastName}
                                className="w-full h-11"
                            />
                        </div>
                    </div>
                    <Input
                        label="Nombre de usuario"
                        name="username"
                        id="username"
                        type="username"
                        placeholder="| Ingrese su nombre de usuario"
                        onChange={handleChange}
                        error={errors.username}
                        value={values.username}
                        className="w-full h-11"
                    />
                    <Input
                        label="Avatar"
                        name="avatar"
                        id="avatar"
                        type="avatar"
                        placeholder="| Ingrese la URL de un avatar"
                        onChange={handleChange}
                        error={errors.avatar}
                        value={values.avatar}
                        className="w-full h-11"
                    />

                    <Input
                        label="Correo electrónico"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="| Ingrese su correo electrónico"
                        onChange={handleChange}
                        error={errors.email}
                        value={values.email}
                        className="w-full h-11"
                    />

                    <div className="relative">
                        <Input
                            label="Contraseña"
                            name="password"
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="| Ingrese su contraseña"
                            onChange={handleChange}
                            error={errors.password}
                            value={values.password}
                            className="w-full h-11"
                        />
                        <div
                            className="cursor-pointer top-8 flex right-0 pr-3 items-center absolute text-gray-800"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </div>
                    </div>
                    <div className="relative">
                        <Input
                            label="Repetir contraseña"
                            name="confirmPassword"
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="| Ingrese nuevamente su contraseña"
                            onChange={handleChange}
                            error={errors.confirmPassword}
                            value={values.confirmPassword}
                            className="w-full h-11"
                        />
                        <div
                            className="cursor-pointer top-8 flex right-0 pr-3 items-center absolute text-gray-800"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </div>
                    </div>
                </>
            </AuthLayout>
        </Layout>
    );
};

export default RegisterONGPage