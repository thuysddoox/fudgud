import React from 'react';
import LoginForm from '../../components/Form/login';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

const Login = () => {
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
        <LoginForm />
      </div>
    </Main>
  );
};

export default Login;
