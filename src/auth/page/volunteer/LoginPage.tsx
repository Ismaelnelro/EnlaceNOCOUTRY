import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Layout from '../../../layout/Layout';
import { AuthLayout } from '../../layout/AuthLayout';
import Input from '../../../components/Input';


export const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Coloca un email valido').required('El email es requerido'),
            password: Yup.string().required('La contraseña es requerida'),
        }),
        onSubmit: async (values) => {
            console.log(values);
        },
    });

    // const navigate = useNavigate();
    // const { user, setuser } = useContext(userContext);

    // https://api-users-ong.onrender.com/
    const startLogin = async () => { };

    return (
        <Layout>
            <AuthLayout handle={handleSubmit} isLogin={true}>
                <>
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
                            className="cursor-pointer top-9 flex right-0 pr-3 items-center absolute text-gray-800"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </div>
                    </div>
                    <a href="#!" className="text-xs">
                        ¿Olvidaste tu contraseña?
                    </a>

                </>

            </AuthLayout>
        </Layout>
    );
}
