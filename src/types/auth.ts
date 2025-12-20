export type SignUpInputType = {
  fullname?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  policyConfirmed?: boolean;
};

export type SignUpInputErrorType = {
  fullname?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  policyConfirmed?: string;
};

export type SignUpRequestType = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export type LoginInputType = {
  username?: string;
  password?: string;
};

export type LoginInputErrorType = {
  username?: string;
  password?: string;
};

export type LoginRequestType = {
  username: string;
  password: string;
};

export type LogoutRequestType = {
  refreshToken: string;
};

export type ErrorResponseType = {
  response: {
    data: {
      message: string
    }
  },
  message: string
}
