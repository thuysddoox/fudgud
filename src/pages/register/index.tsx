import React from 'react';
import RegisterForm from '../../components/Form/register';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

const Register = () => {
  return (
    <Main
      meta={
        <Meta
          title="FugGud"
          description="This is food website, restaurant website"
        />
      }
    >
      <div className="pt-48 md:pt-42 pb-20">
        <RegisterForm />
      </div>
    </Main>
  );
};

export default Register;
