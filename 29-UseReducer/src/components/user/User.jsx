import style from './User.module.css'
import React, { useEffect, useReducer, useState } from 'react';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.istifadeci];
    case 'UPDATE':
      return state.map(user =>
        user.id === action.istifadeci.id ? { ...user, ...action.istifadeci } : user
      );
    case 'DELETE':
      return state.filter(user => user.id !== action.istifadeci);
    case 'RESET':
      return [];
    default:
      return state;
  }
}


const User = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
      const [name, setName] = useState('');
      const [surname, setSurname] = useState('');
      const [editId, seteditId] = useState(null);

      useEffect(()=>{
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if(users){
          users.forEach(user => {
            dispatch({type:'CREATE',istifadeci:user});
          });
        }
      },[])

      useEffect(()=>{
        localStorage.setItem('users',JSON.stringify(state));
      },[state])
    

      const create = () => {
        if (!name.trim() || !surname.trim()) return;
    
        dispatch({
          type: 'CREATE',
          istifadeci: {
            id: Date.now(),
            name,
            surname
          }
        });
    
        setName('');
        setSurname('');
      };
    
      const edit = (user) => {
        setName(user.name);
        setSurname(user.surname);
        seteditId(user.id);
      };
    
      const save = () => {
        if (!name || !surname) return;
    
        dispatch({
          type: 'UPDATE',
          istifadeci: {
            id: editId,
            name,
            surname
          }
        });
    
        setName('');
        setSurname('');
        seteditId(null);
      };
    
      const delet = (id) => {
        dispatch({ type: 'DELETE', istifadeci: id });
    
        if (editId === id) {
          setName('');
          setSurname('');
          seteditId(null);
        }
      };

      const reset = () => {
        dispatch({ type: 'RESET' });
        setName('');
        setSurname('');
        seteditId(null);
      };

    return (
        <div className={style.container}>
      <h1 className={style.title}>İstifadəçi İdarəetmə Sistemi</h1>

      <div className={style.form}>
        <input
          type="text"
          placeholder="Ad"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={style.input}
        />
        <input
          type="text"
          placeholder="Soyad"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className={style.input}
        />

        {editId ? (
          <button onClick={save} className={style.btn}>Yadda Saxla</button>
        ) : (
          <button onClick={create} className={style.btn}>Əlavə Et</button>
        )}

        <button onClick={reset} className={style.btnzero}>Sıfırla</button>
      </div>

      <ul className={style.list}>
        {state.map((user) => (
          <li key={user.id} className={style.listItem}>
            <span>{user.name} {user.surname}</span>
            <div>
              <button onClick={() => edit(user)} className={style.btnUpdate}>Redaktə Et</button>
              <button onClick={() => delet(user.id)} className={ style.btnDelete }>Sil</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User