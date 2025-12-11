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
