import { useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "react-toastify";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

import Input from "../../components/form/input/InputField";
import Label from "../../components/form/Label";
import MultiSelect from "../../components/form/MultiSelelect";
import Button from "../../components/ui/button/Button";
import type { NewUserRequestType } from "../../types/users";
import type { TeamType } from "../../types/teams";
import useGetTeams from "../../hooks/api/teams/use-get-teams";
import useCreateNewUser from "../../hooks/api/users/user-create-new-user";

interface UserInputType {
  name?: string;
  email?: string;
  username?: string;
  password?: string;
  teams?: number[];
}

const NewUserPage = () => {
  const { data: teams } = useGetTeams();
  const newUserMutation = useCreateNewUser();

  const [showPassword, setShowPassword] = useState(false);
  const [inputData, setInputData] = useState<UserInputType>();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleCreateNewUser = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!inputData?.name) {
      toast.error("Không để trống tên");
      return;
    }
    if (!inputData?.username) {
      toast.error("Không để trống tài khoản");
      return;
    }
    if (!inputData?.password) {
      toast.error("Không để trống mật khẩu");
      return;
    }

    const data: NewUserRequestType = {
      name: inputData.name,
      email: inputData.email || "",
      username: inputData.username,
      password: inputData.password,
      teams: inputData.teams || [],
    };

    newUserMutation.mutate(data);
  };

  return (
    <div className="no-scrollbar relative w-full overflow-y-auto bg-white dark:bg-gray-900 lg:p-11">
      <div className="px-2 pr-14">
        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
          Tạo người dùng mới
        </h4>
      </div>
      <form className="flex flex-col">
        <div className="custom-scrollbar overflow-y-auto px-2 pb-3">
          <div className="mt-7">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 pb-20 max-w-[700px]">
              <div className="col-span-2 lg:col-span-full">
                <Label>
                  Họ và tên
                  <span className="text-error-500">*</span>{" "}
                </Label>
                <Input
                  type="text"
                  placeholder="Nhập tên"
                  name="name"
                  value={inputData?.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-span-2 lg:col-span-full">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="Nhập email"
                  name="email"
                  value={inputData?.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-span-2 lg:col-span-full">
                <Label>
                  Tài khoản
                  <span className="text-error-500">*</span>{" "}
                </Label>
                <Input
                  placeholder="Nhập tài khoản"
                  type="text"
                  name="username"
                  value={inputData?.username}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-span-2 lg:col-span-full">
                <Label>
                  Mật khẩu
                  <span className="text-error-500">*</span>{" "}
                </Label>
                <div className="relative">
                  <Input
                    placeholder="Nhập mật khẩu"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={inputData?.password}
                    onChange={handleInputChange}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                  >
                    {showPassword ? (
                      <LuEye className="size-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <LuEyeOff className="size-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </span>
                </div>
              </div>

              <div className="col-span-2 lg:col-span-full">
                <MultiSelect
                  label="Teams"
                  defaultSelected={inputData?.teams?.map((id) => {
                    return id;
                  })}
                  options={teams?.data.data?.map((team: TeamType) => {
                    return {
                      value: team.id,
                      text: team.name,
                    };
                  })}
                  onChange={(teamids) =>
                    setInputData((prev) => {
                      return {
                        ...prev,
                        teams: teamids.map((id) =>
                          Number.parseInt(id as string),
                        ),
                      };
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
          <Button size="sm" onClick={handleCreateNewUser}>
            Tạo mới
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewUserPage;
