import { User } from "../types/api/user";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        if (res.data) {
          setUsers(res.data);
        } else {
          showMessage({ title: "ユーザーが見つかりません", status: "error" });
        }
      })
      .catch(() => {
        showMessage({ title: "ユーザーを取得できません", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { getUsers, users, loading };
};
