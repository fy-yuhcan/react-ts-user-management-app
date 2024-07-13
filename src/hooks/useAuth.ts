import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser} from "../hooks/useLoginUser"

export const useAuth = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { showMessage } = useMessage();
    const {setLoginUser} = useLoginUser();

    const login = useCallback((id: string) => {
        setLoading(true);
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                if (res.data) {
                    const isAdmin = res.data.id == 10 ? true : false;
                    setLoginUser( {...res.data,isAdmin})
                    navigate("/home");
                    showMessage({ title: "ログインしました", status: "success" });
                } else {
                    showMessage({ title: "ユーザーが見つかりません", status: "error" });
                }
            })
            .catch(() => {
                showMessage({ title: "ログインできません", status: "warning" });
            })
            .finally(() => {
                setLoading(false);
            });
    }, [navigate, showMessage]);

    return { login, loading, setLoading };
};

