import InputForm from "../../components/InputForm";
import { Link } from "react-router-dom";
import "./manage.css";
import ButtonForm from "../../components/ButtonForm";

const CreateUser = () => {
    return (

        <div>
            <h1 className="addTech">Create User</h1>

            <box className="employee float-left center">
                <p className="text-center text-2xl px-6 my-10">
                    Employee email
                </p>
            </box>
            <box className="complete float-right">
                <InputForm type="text" placeholder="employee@company.org" />
            </box>

            <div>
                <box >
                    <p className="rol text-2xl ">
                        Use rol
                    </p>
                </box>
                <box className="developer float-right">
                    <select className="py-2 px-4 border-2 border-secondary rounded-lg">
                        <option value={10}>Developer</option>
                        <option value={20}>Leader</option>
                        <option value={30}>Admin</option>
                    </select>
                </box>
            </div>

            <div>
                <box>
                    <p className="teamMember float-left text-2xl ">
                        Team Member
                    </p>
                </box>
                <box className="complete float-right">
                    <InputForm type="text" placeholder="employee@company.org" />
                </box>


            </div>

            <div className="margin-top-create text-center">
                <Link to="/manage/usercreated">
                    <ButtonForm text={"Create"} />
                </Link>
            </div>



            {/*
              
                <p className="text-center text-2xl px-6 my-10">
                    Team Member
                    <select
                        className="py-2 px-4 border-2 border-secondary rounded-lg">
                        <option value={10}>Developer</option>
                        <option value={20}>Leader</option>
                        <option value={30}>Admin</option>
                    </select>
                </p>
 */}

        </div>



    );

};

export default CreateUser;
