import logo from './logo.svg'
import './App.css'
import Header_Top from './Header/header_top'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header_Menu from './Header/header_menu'
import Footer from './Footer/footer'
import { useEffect, useState } from 'react'
import {
  food_central,
  food_home,
  food_northern,
  food_south,
  list_user,
  news,
} from './data'
import { PAGINATION, PATH_ROUTER, PATH_ROUTER__CUSTOMER } from './contants'
import { Route, Routes, useLocation } from 'react-router-dom'
import Blog from './Body/blog'
import Food_Central from './Body/food_central'
import Food_Northern from './Body/food_northern'
import Food_south from './Body/food_south'
import Food_new from './Body/news'
import Home from './Body/home'
import Login from './Form/login'
import Register from './Form/register'
import { Prev } from 'react-bootstrap/esm/PageItem'
import Food_item from './Body/food_item'
import New_Item from './Body/new_item'
import HeaderAdmin from './Admin/Header'
import HomeAdmin from './Admin'

function App() {
  const [food_souths, setFood_south] = useState(() => {
    const food_souths = localStorage.getItem('food_souths')
    if (food_souths) {
      return JSON.parse(food_souths)
    } else {
      return food_south
    }
  })
  const [food_homes, setFood_home] = useState(food_home)
  const [food_centrals, setFood_central] = useState(() => {
    const food_centrals = localStorage.getItem('food_centrals')
    if (food_centrals) {
      return JSON.parse(food_centrals)
    } else {
      return food_central
    }
  })
  const [food_northerns, setFood_north] = useState(() => {
    const food_northerns = localStorage.getItem('food_northerns')
    if (food_northerns) {
      return JSON.parse(food_northerns)
    } else {
      return food_northern
    }
  })
  const [food_news, setFood_news] = useState(() => {
    const food_new = localStorage.getItem('food_news')
    if (food_new) {
      return JSON.parse(food_new)
    } else {
      return news
    }
  })
  const [listUsers, setListUsers] = useState(list_user)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password_register, setPasswordRegister] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [food_item, setFoodItem] = useState([])
  const [new_item, setNewItem] = useState([])
  const [displaySeeMore, setDisplaySeeMore] = useState(false)

  useEffect(() => {
    localStorage.setItem('food_news', JSON.stringify(food_news))
    localStorage.setItem('food_centrals', JSON.stringify(food_centrals))
    localStorage.setItem('food_souths', JSON.stringify(food_souths))
    localStorage.setItem('food_northerns', JSON.stringify(food_northerns))
  }, [food_news, food_northerns, food_centrals, food_souths])

  // useEffect(() => {
  //   const news = JSON.parse(localStorage.getItem('food_news'));
  //   const food_central = JSON.parse(localStorage.getItem('food_centrals'));
  //   const food_south = JSON.parse(localStorage.getItem('food_souths'));
  //   const food_northern = JSON.parse(localStorage.getItem('food_northerns'));
  //   if (news) {
  //     setFood_news(news);
  //   }
  //   if (food_central) {
  //     setFood_central(food_central);
  //   }
  //   if (food_south) {
  //     setFood_south(food_south);
  //   }
  //   if (food_northern) {
  //     setFood_north(food_northern);
  //   }
  // }, []);

  const [nameFood, setNameFood] = useState("");
  const [listFood, setListFood] = useState([]);
  console.log(listFood)

  const { pathname } = useLocation();
  useEffect(() => {
    if (
      pathname === PATH_ROUTER__CUSTOMER.FOOD_CENTRAL 
    ) {
      setListFood(food_centrals);
      setNameFood("food_centrals");
    } else if (
      pathname === PATH_ROUTER__CUSTOMER.FOOD_NORTH
    ) {
      setListFood(food_northerns);
      setNameFood("food_northerns");
    } else if (
      pathname === PATH_ROUTER__CUSTOMER.FOOD_SOUTH 
    ) {
      setListFood(food_souths);
      setNameFood("food_souths");
    } else if (
      pathname === PATH_ROUTER__CUSTOMER.FOOD_NEW 
    ) {
      setListFood(food_news);
      setNameFood("food_news");
    }
  }, [pathname]);

  const [error, setError] = useState({
    isErrorUserName: false,
    isErrorPassword: false,
    messageErrorUserName: '',
    messageErrorPassword: '',
  })

  const [errorRegister, setErrorRegister] = useState({
    isErrorPassword: false,
    isErrorName: false,
    isErrorEmail: false,
    isErrorPhone: false,
    messageErrorName: '',
    messageErrorPhone: '',
    messageErrorEmail: '',
    messageErrorPassword: '',
  })

  const onClickItem = (item) => {
    setFoodItem(item)
  }

  const onClickItemNew = (item) => {
    setNewItem(item)
  }

  /////////////////PAGINATION FOOD SOUTHS///////////////
  const [pagination_FS, setPagination_FS] = useState({
    totalPage: Math.ceil(food_souths.length / PAGINATION.LIMIT),
    currentPage: PAGINATION.CURRENT_PAGE,
  })
  const [userPage_FS, setUserPage_FS] = useState(
    food_souths.slice(0, PAGINATION.LIMIT),
  )

  useEffect(() => {
    const newUser = [...food_souths].slice(
      (pagination_FS.currentPage - 1) * PAGINATION.LIMIT,
      pagination_FS.currentPage * PAGINATION.LIMIT,
    )
    setUserPage_FS((pre) => (pre = newUser))
  }, [pagination_FS.currentPage, pagination_FS.totalPage])

  const onChangePage_FS = (currentPage) => {
    setPagination_FS((pre) => ({
      ...pre,
      currentPage,
    }))
  }
  /////////////////PAGINATION FOOD NORTHERS///////////////
  const [pagination_FN, setPagination_FN] = useState({
    totalPage: Math.ceil(food_northerns.length / PAGINATION.LIMIT),
    currentPage: PAGINATION.CURRENT_PAGE,
  })
  const [userPage_FN, setUserPage_FN] = useState(
    food_northerns.slice(0, PAGINATION.LIMIT),
  )

  useEffect(() => {
    const newUser = [...food_northerns].slice(
      (pagination_FN.currentPage - 1) * PAGINATION.LIMIT,
      pagination_FN.currentPage * PAGINATION.LIMIT,
    )
    setUserPage_FN((pre) => (pre = newUser))
  }, [pagination_FN.currentPage, pagination_FN.totalPage])

  const onChangePage_FN = (currentPage) => {
    setPagination_FN((pre) => ({
      ...pre,
      currentPage,
    }))
  }

  /////////////////PAGINATION FOOD CENTRAL///////////////
  const [pagination_FC, setPagination_FC] = useState({
    totalPage: Math.ceil(food_centrals.length / PAGINATION.LIMIT),
    currentPage: PAGINATION.CURRENT_PAGE,
  })
  const [userPage_FC, setUserPage_FC] = useState(
    food_centrals.slice(0, PAGINATION.LIMIT),
  )

  useEffect(() => {
    const newUser = [...food_centrals].slice(
      (pagination_FC.currentPage - 1) * PAGINATION.LIMIT,
      pagination_FC.currentPage * PAGINATION.LIMIT,
    )
    setUserPage_FC((pre) => (pre = newUser))
  }, [pagination_FC.currentPage, pagination_FC.totalPage])

  const onChangePage_FC = (currentPage) => {
    setPagination_FC((pre) => ({
      ...pre,
      currentPage,
    }))
  }

  /////////////////PAGINATION FOOD News///////////////
  const [pagination_New, setPagination_New] = useState({
    totalPage: Math.ceil(food_news.length / PAGINATION.LIMIT),
    currentPage: PAGINATION.CURRENT_PAGE,
  })
  const [userPage_New, setUserPage_New] = useState(
    food_news.slice(0, PAGINATION.LIMIT),
  )

  useEffect(() => {
    const newUser = [...food_news].slice(
      (pagination_New.currentPage - 1) * PAGINATION.LIMIT,
      pagination_New.currentPage * PAGINATION.LIMIT,
    )
    setUserPage_New((pre) => (pre = newUser))
  }, [pagination_New.currentPage, pagination_New.totalPage])

  const onChangePage_New = (currentPage) => {
    setPagination_New((pre) => ({
      ...pre,
      currentPage,
    }))
  }

  /////////////////////////////See_more///////////////
  const [seeMore, setSeeMore] = useState(
    food_homes.slice(0, PAGINATION.LIMIT_HOME),
  )

  const onSeeMore = () => {
    setSeeMore((prev) => 
    (prev = seeMore.concat(
      food_homes.slice(
        seeMore.length,
        seeMore.length + PAGINATION.LIMIT_HOME
      )
    )) 
    )
  }

  useEffect(() => {
    if(seeMore.length === food_homes.length) {
      setDisplaySeeMore(true)
    }
  }, [seeMore])

  /////////////////PAGINATION FOOD News HOME///////////////
  const [userPage_NewHome, setUserPage_NewHome] = useState(
    food_news.slice(0, 4),
  )

  var onLogin = () => {
    let test_user = 0
    listUsers.filter((el) => {
      if (username === '') {
        setError(
          (pre) =>
            (pre = {
              ...pre,
              isErrorUserName: true,
              messageErrorUserName: 'Không bỏ trống',
            }),
        )
      }
      if (el.email !== username) {
        test_user += 1
      }
      if (test_user === listUsers.length) {
        setError(
          (pre) =>
            (pre = {
              ...pre,
              isErrorUserName: true,
              messageErrorUserName: 'Mật khẩu sai',
            }),
        )
      } else if (el.email === username) {
        setError(
          (pre) =>
            (pre = {
              ...pre,
              isErrorUserName: false,
              messageErrorUserName: '',
            }),
        )
        if (el.password !== password) {
          setError(
            (pre) =>
              (pre = {
                ...pre,
                isErrorPassword: true,
                messageErrorPassword: 'Mật khẩu sai',
              }),
          )
        } else if (el.password === password) {
          setError(
            (pre) =>
              (pre = {
                ...pre,
                isErrorPassword: false,
                messageErrorPassword: '',
              }),
          )
        }
      }

      if (password === '') {
        setError(
          (pre) =>
            (pre = {
              ...pre,
              isErrorPassword: true,
              messageErrorPassword: 'Không được bỏ trống',
            }),
        )
      }
    })
  }

  var onRegister = () => {
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g
    var email_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    var password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    if (password_register === '') {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorPassword: true,
            messageErrorPassword: 'Không được bỏ trống',
          }),
      )
    } else if (password_regex.test(password_register) === false) {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorPassword: true,
            messageErrorPassword:
              'Mật khẩu gồm ít nhất một chữ viết hoa, 1 chữ viết thường, chữ số, ký tự đặc biệt và có độ dài từ 8 đến 14 ký tự ',
          }),
      )
    } else {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorPassword: false,
            messageErrorPassword: 'Không được bỏ trống',
          }),
      )
    }
    if (name === '') {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorName: true,
            messageErrorName: 'Không được bỏ trống',
          }),
      )
    } else {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorName: false,
            messageErrorName: '',
          }),
      )
    }
    if (phone === '') {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorPhone: true,
            messageErrorPhone: 'Không được bỏ trống',
          }),
      )
    } else if (vnf_regex.test(phone) === false) {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorPhone: true,
            messageErrorPhone: 'Số điện thoại không chính xác',
          }),
      )
    } else {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorPhone: false,
            messageErrorPhone: '',
          }),
      )
    }
    if (email === '') {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorEmail: true,
            messageErrorEmail: 'Không được bỏ trống',
          }),
      )
    } else if (email_regex.test(email) === false) {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorEmail: true,
            messageErrorEmail: 'Email sai vui lòng kiểm tra lại',
          }),
      )
    } else {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorEmail: false,
            messageErrorEmail: '',
          }),
      )
    }

    if (
      errorRegister.isErrorEmail === false &&
      errorRegister.isErrorPhone === false &&
      errorRegister.isErrorPhone === false &&
      errorRegister.isErrorName === false
    ) {
      return setListUsers([
        ...listUsers,
        {
          name,
          email,
          phone,
          password,
        },
      ])
    }
  }
  return (
    <div className="App container">
      <div className="home-container">
        <div className="home-frame2">
          <Header_Top />
          <Header_Menu />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  food_homes={seeMore}
                  onClickItem={onClickItem}
                  food_news={userPage_NewHome}
                  onClickItemNew={onClickItemNew}
                  onSeeMore={onSeeMore}
                  displaySeeMore = {displaySeeMore}
                />
              }
            />
            <Route
              path={PATH_ROUTER__CUSTOMER.FOOD_NORTH}
              element={
                <Food_Northern
                  food_northerns={userPage_FN}
                  onChangePage_FN={onChangePage_FN}
                  totalPage_FN={pagination_FN.totalPage}
                  currentPage_FN={pagination_FN.currentPage}
                  onClickItem={onClickItem}
                />
              }
            />
            <Route
              path={PATH_ROUTER__CUSTOMER.FOOD_SOUTH}
              element={
                <Food_south
                  food_souths={userPage_FS}
                  onChangePage_FS={onChangePage_FS}
                  totalPage_FS={pagination_FS.totalPage}
                  currentPage_FS={pagination_FS.currentPage}
                  onClickItem={onClickItem}
                />
              }
            />
            <Route
              path={PATH_ROUTER__CUSTOMER.FOOD_CENTRAL}
              element={
                <Food_Central
                  food_centrals={userPage_FC}
                  onChangePage_FC={onChangePage_FC}
                  totalPage_FC={pagination_FC.totalPage}
                  currentPage_FC={pagination_FC.currentPage}
                  onClickItem={onClickItem}
                  listFood={listFood}
                />
              }
            />
            <Route
              path={PATH_ROUTER__CUSTOMER.FOOD_NEW}
              element={
                <Food_new
                  food_news={userPage_New}
                  onChangePage_News={onChangePage_New}
                  totalPage_News={pagination_New.totalPage}
                  currentPage_News={pagination_New.currentPage}
                  onClickItemNew={onClickItemNew}
                />
              }
            />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/login"
              element={
                <Login
                  onLogin={onLogin}
                  setUsername={setUsername}
                  setPassword={setPassword}
                  error={error}
                />
              }
            />
            <Route
              path="/register"
              element={
                <Register
                  onRegister={onRegister}
                  setPasswordRegister={setPasswordRegister}
                  setName={setName}
                  setPhone={setPhone}
                  setEmail={setEmail}
                  errorRegister={errorRegister}
                />
              }
            />

            <Route
              path="/chitiet"
              element={<Food_item food_item={food_item} />}
            />

            <Route path="/tintuc" element={<New_Item new_item={new_item} />} />
          </Routes>
        </div>
      </div>

      <div className="body"></div>
      <Footer />
      {/* <div id="root">
        <HomeAdmin
          food_news={food_news}
          food_centrals={food_centrals}
          food_northerns={food_northerns}
          food_souths={food_souths}
          setFood_news={setFood_news}
          setFood_north={setFood_north}
          setFood_south={setFood_south}
          setFood_central={setFood_central}
        />
      </div> */}
    </div>
  )
}

export default App
