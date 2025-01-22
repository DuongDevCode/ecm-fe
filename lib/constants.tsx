export const getFieldNameLoginOrRegister = (value: string) => {
  const key: {[key: string]: string} = {
    email: 'Email',
    pwd: 'Mật khẩu',
    fullname: 'Tên đăng nhập',
    address: 'Địa chỉ',
    position: 'Chức vụ',
    phone: 'Số điện thoại',
    register: 'Đăng ký',
    login: 'Đăng nhập',
    back_to_login: 'Quay lai trang đăng nhập',
    create_an_account: 'Tạo tài khoản',
    dob: 'Ngày sinh'
  }
  return key?.[value] ?? value
}