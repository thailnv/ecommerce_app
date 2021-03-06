import { constants as c } from "../constants";
const userInfo = localStorage.getItem("userInfo");
const token = localStorage.getItem("token");
const profile = localStorage.getItem("profile");
const initialState = {
  phone: "",
  email: "",
  boxChatState: "",
  userInfo: userInfo ? JSON.parse(userInfo) : null,
  token: token ? JSON.parse(token) : null,
  profile: profile
    ? { ...JSON.parse(profile), status: c.SUCCESS }
    : {
        status: c.LOADING,
      },
  address: {
    list: [],
    status: c.LOADING,
  },
  notify: {
    status: c.LOADING,
    total_unread: 0,
    data: [],
  },
  status: c.LOADING,
  message: "",
  myReview: {
    status: c.LOADING,
    list: [],
  },
  badges: {
    cart_quantity: 0,
    favorite_products: 0,
    voucher_total: 0,
    status: c.LOADING,
  },
};
export function user(state = initialState, action) {
  switch (action.type) {
    case c.REQUEST_PHONE_CHECK:
      return {
        ...state,
        phone: action.phone,
      };
    case c.LOGIN_SUCCESS:
    case c.REGIS_SUCCESS:
      return {
        ...state,
        token: action.token,
      };
    case c.LOGIN_FAILURE:
    case c.REGIS_FAILURE:
      return {
        ...state,
        message: action.message,
      };
    case c.LOGOUT:
      return {
        ...state,
        token: null,
        userInfo: null,
        profile: {
          status: c.LOADING,
        },
      };
    case c.GET_USER_ADDRESS_SUCCESS:
    case c.UPDATE_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        address: {
          list: action.address,
          status: c.SUCCESS,
        },
      };
    case c.GET_USER_ADDRESS_FAILURE:
      return {
        ...state,
        address: {
          status: c.FAILURE,
          list: [],
        },
      };
    case c.CLEAR_MESSAGE:
      return {
        ...state,
        message: "",
      };
    case c.GET_PROFILE_SUCCESS:
    case c.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          ...action.profile,
          status: c.SUCCESS,
        },
        status: c.SUCCESS,
      };
    case c.GET_PROFILE_FAILURE:
    case c.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        profile: {
          status: c.FAILURE,
        },
        status: c.FAILURE,
      };
    case c.GET_USER_REVIEW_SUCCESS:
      return {
        ...state,
        myReview: {
          status: c.SUCCESS,
          current_page: action.current_page,
          list: action.data,
        },
      };
    case c.GET_USER_REVIEW_FAILURE:
      return {
        ...state,
        myReview: {
          status: c.FAILURE,
        },
      };
    case c.GET_USER_BADGES_SUCCESS:
      return {
        ...state,
        badges: {
          ...action.badges,
          status: c.SUCCESS,
        },
      };
    case c.GET_USER_BADGES_FAILURE:
      return {
        ...state,
        badges: {
          cart_quantity: 0,
          favorite_products: 0,
          voucher_total: 0,
          status: c.FAILURE,
        },
      };
    case c.GET_USER_NOTIFY_SUCCESS:
      return {
        ...state,
        notify: {
          ...action.data.list_notification,
          status: c.SUCCESS,
          total_unread: action.data.total_unread,
        },
      };
    case c.GET_USER_NOTIFY_FAILURE:
      return {
        ...state,
        notify: {
          status: c.LOADING,
          total_unread: 0,
          data: [],
        },
      };
    case c.TOGGLE_BOX_CHAT:
      return {
        ...state,
        boxChatState: action.boxChatState,
      };
    default:
      return state;
  }
}
