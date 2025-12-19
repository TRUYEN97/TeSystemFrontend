import { useState, type ChangeEvent, type FormEvent } from "react";

import Input from "../../components/form/input/InputField";
import Label from "../../components/form/Label";
import Button from "../../components/ui/button/Button";
import Select from "../../components/form/Select";
import useGetAllDepartments from "../../hooks/api/departments/use-get-all-departments";
import type { DepartmentType } from "../../types/departments";
import { toast } from "react-toastify";
import useNewTeam from "../../hooks/api/teams/use-new-team";
import type { NewTeamRequestType } from "../../types/teams";

interface TeamInput {
  name?: string;
  departmentId?: number | string;
}

const NewTeamPage = () => {
  const { data: departments } = useGetAllDepartments();
  const mutation = useNewTeam();

  const [inputData, setInputData] = useState<TeamInput>();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const verifyInputData = () => {
    if (!inputData?.name) {
      throw Error("Tên không được để trống");
    }
    if (!inputData?.departmentId) {
      throw Error("Phòng ban không được để trống");
    }
  }

  const handleCreateNewUser = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      verifyInputData()
      const data: NewTeamRequestType = {
        name: inputData?.name || '',
        departmentId: inputData?.departmentId as number || 0
      }
      mutation.mutate(data)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, {
          autoClose: 3000
        })
      }
    }
  };

  return (
    <div className="no-scrollbar relative w-full overflow-y-auto bg-white dark:bg-gray-900 lg:p-11">
      <div className="px-2 pr-14">
        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
          Tạo Nhóm mới
        </h4>
      </div>
      <form className="flex flex-col">
        <div className="custom-scrollbar overflow-y-auto px-2 pb-3">
          <div className="mt-7">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 max-w-[700px]">
              <div className="col-span-2 lg:col-span-full">
                <Label>
                  Tên nhóm
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
                <Label>
                  Phòng ban
                  <span className="text-error-500">*</span>{" "}
                </Label>
                <Select
                  options={departments?.data.data.map((de: DepartmentType) => {
                    return {
                      label: de.name, 
                      value: de.id
                    }
                  })}
                  placeholder="Select Option"
                  onChange={(value) => {
                     setInputData({
                      name: inputData?.name,
                      departmentId: value
                     })
                  }}
                  className="dark:bg-dark-900"
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

export default NewTeamPage;
