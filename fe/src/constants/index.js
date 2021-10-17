function getMeta(metaName) {
  const metas = document.getElementsByTagName("meta");
  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") === metaName) {
      return metas[i].getAttribute("content");
    }
  }
  return "";
}
exports.constants = {
  DEFAULT_TITLE:
    "Xây dựng hệ thống bán hàng mạnh mẽ, mang thương hiệu của riêng bạn.",
  DEFAULT_HOME_TITLE: "Trang chủ",
  DEFAULT_ADDRESS: "Số 41, Ngõ 76, Phố Mai Dịch, Cầu Giấy, Hà Nội.",
  DEFAULT_PRODUCT_IMG: "/img/default_product.jpg",
  DEFAULT_SHORTCUT: "/img/default_shortcut.png",
  DEFAULT_HEADER_BACKGROUND_COLOR: "white",
  DEFAULT_HEADER_TEXT_COLOR: "#757575",
  DEFAULT_LOGO: "/img/default_logo.png",
  DEFAULT_MAIL: "doapp.vn@gmail.com",
  MAIN_PAGE_URL: "https://doapp.vn/",
  DEFAULT_PHONE: "0246.0278.753",
  DEFAULT_COLOR: "#e62e04",
  //STATUS
  API_URL: "http://localhost:3001/api",
  CLEAR_MESSAGE: "CLEAR_MESSAGE",
  LOADING: "LOADING",
  NONE: "NONE",
  FAILURE: "FAILURE",
  SUCCESS: "SUCCESS",
  //APP
  GET_WEB_THEME_SUCCESS: "GET_WEB_THEME_SUCCESS",
  GET_WEB_THEME_FAILURE: "GET_WEB_THEME_FAILURE",
  //
  GET_INFO_STORE_SUCCESS: "GET_INFO_STORE_SUCCESS",
  GET_INFO_STORE_FAILURE: "GET_INFO_STORE_FAILURE",
  //
  TOGGLE_CHAT_STATUS: "TOGGLE_CHAT_STATUS",
  GETTING_WEB_THEME: "GETTING_WEB_THEME",
  FORGOT_PASS_POPUP: "FORGOT_PASS_POPUP",
  AUTOHIDE_POPUP: "AUTOHIDE_POPUP",
  PROFILE_POPUP: "PROFILE_POPUP",
  RATTING_POPUP: "RATTING_POPUP",
  LOADING_POPUP: "LOADING_POPUP",
  MESSAGE_POPUP: "MESSAGE_POPUP",
  CHANGE_POPUP: "CHANGE_POPUP",
  PHONE_POPUP: "PHONE_POPUP",
  LOGIN_POPUP: "LOGIN_POPUP",
  REGIS_POPUP: "REGIS_POPOP",
  ORDER_POPUP: "ORDER_POPUP",
  OTP_POPUP: "OTP_POPUP",
  NO_POPUP: "NO_POPUP",
  LOGOUT: "LOGOUT",
  //PAGE
  GET_HOME_SUCCESS: "GET_HOME_SUCCESS",
  GET_HOME_FAILURE: "GET_HOME_FAILRE",
  //PRODUCT
  GET_PURCHASED_PRODUCTS_SUCCESS: "GET_PURCHASED_PRODUCTS_SUCCESS",
  GET_PURCHASED_PRODUCTS_FAILURE: "GET_PURCHASED_PRODUCTS_FAILURE",
  GET_FAVORITE_PRODUCT_SUCCESS: "GET_FAVORITE_PRODUCT_SUCCESS",
  GET_FAVORITE_PRODUCT_FAILURE: "GET_FAVORITE_PRODUCT_FAILURE",
  GET_SIMILAR_PRODUCTS_SUCCESS: "GET_SIMILAR_PRODUCTS_SUCCESS",
  GET_SIMILAR_PRODUCTS_FAILURE: "GET_SIMILAR_PRODUCTS_FAILURE",
  RESET_PRODUCTS_LIST_STATUS: "RESET_PRODUCTS_LIST_STATUS",
  GET_PRODUCT_REVIEW_SUCCESS: "GET_PRODUCT_REVIEW_SUCCESS",
  GET_PRODUCT_REVIEW_FAILURE: "GET_PRODUCT_REVIEW_FAILURE",
  ADD_TO_WISHLIST_SUCCESS: "ADD_TO_WISHLIST_SUUCESS",
  ADD_TO_WISHLIST_FAILURE: "ADD_TO_WISHLIST_FAILURE",
  REVIEW_PRODUCT_SUCCESS: "REVIEW_PRODUCT_SUCCESS",
  REVIEW_PRODUCT_FAILURE: "REVIEW_PRODUCT_FAILURE",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_FAILURE: "GET_PRODUCTS_FAILURE",
  RESET_PRODUCT_STATUS: "RESET_PRODUCT_STATUS",
  GET_PRODUCT_SUCCESS: "GET_PRODUCT_SUCCESS",
  GET_PRODUCT_FAILURE: "GET_PRODUCT_FAILURE",
  SET_ERROR_SELECT_DISTRIBUTE: "SET_ERROR_SELECT_DISTRIBUTE",
  //CATEGORY
  GET_CATEGORY_SUCCESS: "GET_CATEGORY_SUCCESS",
  GET_CATEGORY_FAILURE: "GET_CATEGORY_FAILURE",
  //NEWS
  GET_NEWS_CATEGORY_SUCCESS: "GET_NEWS_CATEGORY_SUCCESS",
  GET_NEWS_CATEGORY_FAILURE: "GET_NEWS_CATEGORY_FAILURE",
  RESET_NEWS_LIST_STATUS: "RESET_NEWS_LIST_STATUS",
  GET_ALL_NEWS_SUCCESS: "GET_ALL_NEWS_SUCCESS",
  GET_ALL_NEWS_FAILURE: "GET_ALL_NEWS_FAILURE",
  RESET_NEWS_STATUS: "RESET_NEWS_STATUS",
  GET_NEWS_SUCCESS: "GET_NEWS_SUCCESS",
  GET_NEWS_FAILURE: "GET_NEWS_FAILURE",
  //USER
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  REGIS_SUCCESS: "REGIS_SUCCESS",
  REGIS_FAILURE: "REGIS_FAILURE",
  PHONE_REGISTERED: "PHONE_REGISTERED",
  EMAIL_REGISTERED: "EMAIL_REGISTERED",
  GET_PROFILE_SUCCESS: "GET_PROFILE_SUCCESS",
  GET_PROFILE_FAILURE: "GET_PROFILE_FAILURE",
  PHONE_NOT_REGISTERED: "PHONE_NOT_REGISTERED",
  EMAIL_NOT_REGISTERED: "EMAIL_NOT_REGISTERED",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FAILURE: "RESET_PASSWORD_FAILURE",
  GET_USER_ADDRESS_SUCCESS: "GET_USER_ADDRESS_SUCCESS",
  GET_USER_ADDRESS_FAILURE: "GET_USER_ADDRESS_FAILURE",
  ADD_USER_ADDRESS_SUCCESS: "ADD_USER_ADDRESS_SUCCESS",
  ADD_USER_ADDRESS_FAILURE: "ADD_USER_ADDRESS_FAILURE",
  UPDATE_USER_ADDRESS_SUCCESS: "UPDATE_USER_ADDRESS_SUCCESS",
  UPDATE_USER_ADDRESS_FAILURE: "UPDATE_USER_ADDRESS_FAILURE",
  DELETE_USER_ADDRESS_SUCCESS: "DELETE_USER_ADDRESS_SUCCESS",
  DELETE_USER_ADDRESS_FAILURE: "DELETE_USER_ADDRESS_FAILURE",
  GET_USER_REVIEW_SUCCESS: "GET_USER_REVIEW_SUCCESS",
  GET_USER_REVIEW_FAILURE: "GET_USER_REVIEW_FAILURE",
  GET_USER_BADGES_SUCCESS: "GET_USER_BADGES_SUCCESS",
  GET_USER_BADGES_FAILURE: "GET_USER_BADGES_FAILURE",
  GET_USER_NOTIFY_SUCCESS: "GET_USER_NOTIFY_SUCCESS",
  GET_USER_NOTIFY_FAILURE: "GET_USER_NOTIFY_FAILURE",
  UPDATE_PROFILE_SUCCESS: "UPDATE_PROFILE_SUCCESS",
  UPDATE_PROFILE_FAILURE: "UPDATE_PROFILE_FAILURE",
  TOGGLE_BOX_CHAT: "TOGGLE_BOX_CHAT",
  //COLLABORATOR
  GET_COLLABORATOR_ACCOUNT_SUCCESS: "GET_COLLABORATOR_ACCOUNT_SUCCESS",
  GET_COLLABORATOR_ACCOUNT_FAILURE: "GET_COLLABORATOR_ACCOUNT_FAILURE",
  UPDATE_COLLABORATOR_INFO_SUCCESS: "UPDATE_COLLABORATOR_INFO_SUCCESS",
  UPDATE_INFO_COLLABORATOR_FAILURE: "UPDATE_INFO_COLLABORATOR_FAILURE",
  GET_COLLABORATOR_INFO_SUCCESS: "GET_COLLABORATOR_INFO_SUCCESS",
  GET_COLLABORATOR_INFO_FAILURE: "GET_COLLABORATOR_INFO_FAILURE",
  GET_SHARED_ORDERS_SUCCESS: "GET_SHARED_ORDERS_SUCCESS",
  GET_SHARED_ORDERS_FAILURE: "GET_SHARED_ORDERS_FAILURE",
  GET_BALANCE_HISTORY_SUCCESS: "GET_BALANCE_HISTORY_SUCCESS",
  GET_BALANCE_HISTORY_FAILURE: "GET_BALANCE_HISTORY_FAILURE",
  GET_BONUS_HISTORY_SUCCESS: "GET_BONUS_HISTORY_SUCCESS",
  GET_BONUS_HISTORY_FAILURE: "GET_BONUS_HISTORY_FAILURE",
  REQUEST_PAYMENT_SUCCESS: "REQUEST_PAYMENT_SUCCESS",
  REQUEST_PAYMENT_FAILURE: "REQUEST_PAYMENT_FAILURE",
  //CART
  ORDER_SUCCESS: "ORDER_SUCCESS",
  ORDER_FAILURE: "ORDER_FAILURE",
  ADD_CART_SUCCESS: "ADD_CART_SUCCESS",
  ADD_CART_FAILURE: "ADD_CART_FAILURE",
  GET_CART_SUCCESS: "GET_CART_SUCCESS",
  GET_CART_FAILURE: "GET_CART_FAILURE",
  CHANGE_NUMBER_SUCCESS: "CHANGE_NUMBER_SUCCESS",
  CHANGE_NUMBER_FAILURE: "CHANGE_NUMBER_FAILURE",
  GET_SHIPMENT_FEE_SUCCESS: "GET_SHIPMENT_FEE_SUCCESS",
  GET_SHIPMENT_FEE_FAILURE: "GET_SHIPMENT_FEE_FAILURE",
  CHANGE_PAYMENT_METHOD_SUCCESS: "CHANGE_PAYMENT_METHOD_SUCCESS",
  CHANGE_PAYMENT_METHOD_FAILURE: "CHANGE_PAYMENT_METHOD_FAILURE",
  GET_PAYMENT_METHODS_SUCCESS: "GET_PAYMENT_METHODS_SUCCESS",
  GET_PAYMENT_METHODS_FAILURE: "GET_PAYMENT_METHODS_FAILURE",
  GET_ORDERS_LIST_SUCCESS: "GET_ORDERS_LIST_SUCCESS",
  GET_ORDERS_LIST_FAILURE: "GET_ORDERS_LIST_FAILURE",
  GET_ORDER_INFO_SUCCESS: "GET_ORDER_INFO_SUCCESS",
  GET_ORDER_INFO_FAILURE: "GET_ORDER_INFO_FAILURE",
  CANCEL_ORDER_SUCCESS: "CANCEL_ORDER_SUCCESS",
  CANCEL_ORDER_FAILURE: "CANCEL_ORDER_FAILURE",
  //ADDRESS
  SET_ADDRESS_DEFAULT_SUCCESS: "SET_ADDRESS_DEFAULT_SUCCESS",
  SET_ADDRESS_DEFAULT_FAILURE: "SET_ADDRESS_DEFAULT_FAILURE",
  GET_PROVINCES_LIST_SUCCESS: "GET_PROVINCES_LIST_SUCCESS",
  GET_PROVINCES_LIST_FAILURE: "GET_PROVINCES_LIST_FAILURE",
  GET_DISTRICTS_LIST_SUCCESS: "GET_DISTRICTS_LIST_SUCCESS",
  GET_DISTRICTS_LIST_FAILURE: "GET_DISTRICTS_LIST_FAILURE",
  GET_WARDS_LIST_SUCCESS: "GET_WARDS_LIST_SUCCESS",
  GET_WARDS_LIST_FAILURE: "GET_WARDS_LIST_FAILURE",
  //VOUCHER
  GET_ALL_VOUCHERS_SUCCESS: "GET_ALL_VOUCHERS_SUCCESS",
  GET_ALL_VOUCHERS_FAILURE: "GET_ALL_VOUCHERS_FAILURE",
  APPLY_VOUCHER_SUCCESS: "APPLY_VOUCHER_SUCCESS",
  APPLY_VOUCHER_FAILURE: "APPLY_VOUCHER_FAILURE",
  //COMBO
  GET_ALL_COMBO_SUCCESS: "GET_ALL_COMBO_SUCCESS",
  GET_ALL_COMBO_FAILURE: "GET_ALL_COMBO_FAILURE",
  //CODE
  VALUE_DISCOUNT: "VALUE_DISCOUNT",
  PERCENT_DISCOUNT: "PERCENT_DISCOUNT",
};
