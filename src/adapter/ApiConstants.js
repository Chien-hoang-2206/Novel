const POS_PREFIX = 'pos';
const STK_PREFIX = 'stk';
const HRM_PREFIX = 'hrm';
const PRD_PREFIX = 'prd';
const BASE_PREFIX = 'base';
const WA_PREFIX = 'wa';
const ORD_PREFIX = 'odr';
const RPT_PREFIX = 'rpt';
const AST_PREFIX = 'ast';

const ApiConstants = {
    // AUTH
    LOGIN: `${BASE_PREFIX}/auth/login`,
    LOGOUT: `${BASE_PREFIX}/auth/login/logout`,
    REFRESH_TOKEN: `${BASE_PREFIX}/auth/login/refresh-token`,
    GET_USER: `${BASE_PREFIX}/auth/me`,

    CATEGORIES_TREE: `${AST_PREFIX}/type/list`,
    CATEGORIES_GROUP_TREE: `${AST_PREFIX}/group/list`,
    CATEGORY__GROUP_CHILD: `${AST_PREFIX}/group`,
    CATEGORY_CHILD: `${AST_PREFIX}/type`,
    GET_DATA_CATEGORIES_MASTER: `${AST_PREFIX}/type/select-box`,
    GET_DATA_CATEGORIES_GROUP_MASTER: `${AST_PREFIX}/group/selectbox`,
    CATEGORIES_OVERVIEW: `${AST_PREFIX}/type/group/overview`,
    
    // LOCATION
    GET_CITY: `${BASE_PREFIX}/master/provinces`,
    GET_DISTRICTS: `${BASE_PREFIX}/master/districts`,
    GET_COMMUNES: `${BASE_PREFIX}/master/commmunes`,

    //Asset // 
    ASSET_DATA_MASTER: `${AST_PREFIX}/asset/data-master`,
    DATA_MASTER_PRODUCT: `${PRD_PREFIX}/products-management/data/master`,
    EMPLOYEE: `${HRM_PREFIX}/employees-management/v2`,
    FETCH_VENDOR: `${STK_PREFIX}/vendor`,
    FETCH_CATEGORY_VENDOR: `${STK_PREFIX}/category-supplier`,

    GET_ASSET_UNIT: `${AST_PREFIX}/unit/list`,
    ADD_ASSET_UNIT: `${AST_PREFIX}/unit/create`,
    UPDATE_ASSET_UNIT: `${AST_PREFIX}/unit/update`,
    DELETE_ASSET_UNIT: `${AST_PREFIX}/unit`,
    
    GET_ASSET: `${AST_PREFIX}/asset`,
    GET_ASSET_DEPRECIATION: `${AST_PREFIX}/asset/depreciated`,
    GET_INVENTORY_HISTORY: `${AST_PREFIX}/asset/inventory-history`,
    
    GET_VERIFICATION_LIST: `${AST_PREFIX}/asset/inventory`,
    GET_ASSET_ADD_CREATE_VERIFICATION : `${AST_PREFIX}/asset/inventory/asset-data`,

    GET_ALLOCATION: `${AST_PREFIX}/asset-import-export/hand-over/list`,
    GET_ALLOCATION_DETAIL: `${AST_PREFIX}/asset-import-export/allocation`,
    GET_TRANSFER_INFO: `${AST_PREFIX}/asset/transfer`,
    GET_DATA_MASTER_ALLOCATION: `${AST_PREFIX}/asset/allocation/data-master`,
    
    IMPORT_EXCEL_SAMPLE: `${AST_PREFIX}/asset/export-excel-template`,
    CREATE_EXCEL_ASSET: `${AST_PREFIX}/asset/import-excel`,

    GET_ASSET_OVERVIEW: `${AST_PREFIX}/asset/overview`,
    EXPORT: `${AST_PREFIX}/asset-import-export/export`,
    IMPORT: `${AST_PREFIX}/asset-import-export/import`,
    TRANSFER: `${AST_PREFIX}/asset-import-export/transfer`,
    ADD_TRANSFER: `${AST_PREFIX}/asset-import-export/hand-over`,
    GET_TRANSFER_ALLOCATION: `${AST_PREFIX}/asset-import-export/allocation`,
    GET_BROKEN_LIST: `${AST_PREFIX}/asset-import-export/broken/list`,
    EXPORT_EXCEL_OF_ASSET: `${AST_PREFIX}/asset/export-excel`,
    EXPORT_EXCEL_OF_ALLOCATION: `${AST_PREFIX}/asset-import-export/allocation/list/export-excel`,
    EXPORT_EXCEL_OF_ALLOCATION_DETAIL: `${AST_PREFIX}/asset-import-export/hand-over/detail/export-excel`,
    GET_ASSET_STOCK : `${AST_PREFIX}/asset/asset-stock`,
    GET_HAND_OVER_DETAIL: `${AST_PREFIX}/asset-import-export/hand-over`,
    OVERVIEW_ASSET_IMPORT: `${AST_PREFIX}/asset-import-export/asset-import/overview`,
    GET_LIST_ASSET_STOCK: `${AST_PREFIX}/asset/asset-stock/list`,
    //
    //MASTER DATA
    MASTER_DATA_EMPLOYEE: `${HRM_PREFIX}/employees-management/data/master`,

    // ORDER
    GET_ORDER: `${ORD_PREFIX}/orders/filter`,
    GET_ORDER_DETAIL: `${ORD_PREFIX}/orders`,
    CREATE_PASS_ORDER_ONLINE: `${ORD_PREFIX}/orders/pass-order-online`,
    GET_ORDER_CONFIRM: `${ORD_PREFIX}/orders/confirm`,
    GET_ORDER_CANCEL: `${ORD_PREFIX}/orders/cancel`,
    GET_ORDER_CHANG_STATUS: `${ORD_PREFIX}/orders/change-status`,
    GET_ORDER_FINISH: `${ORD_PREFIX}/orders/finish`,
    GET_ORDER_PAID: `${ORD_PREFIX}/orders/paid`,
    GET_ORDER_INFO: `${ORD_PREFIX}/orders/order-info`,
    ADD_ORDER: `${ORD_PREFIX}/orders`,
    PASS_ORDER: `${ORD_PREFIX}/orders/pass-order-online`,
    GET_PRODUCT: `${ORD_PREFIX}/orders/product/filter`,
    GET_REFER_INFO_PRODUCT: `${ORD_PREFIX}/orders/product/refer`,
    ORDER_RETURN: `${ORD_PREFIX}/orders/return`,
    OVERVIEW: `${ORD_PREFIX}/orders/report/overview`,
    SALE_REPORT: `${ORD_PREFIX}/orders/report/sale-report`,
    ORDER_REPORT: `${ORD_PREFIX}/orders/report/order-report`,
    GET_BRAND: `${ORD_PREFIX}/orders/report/branches`,
    GET_CALCULATE: `${ORD_PREFIX}/orders/calculate`,
    GET_ORDER_RETURN_ONLINE: `${ORD_PREFIX}/orders/return`,
    GET_ORDER_DONE_RETURN_ONLINE: `${ORD_PREFIX}/orders/return/w/done`,
    UPDATE_PASS_ORDER: `${ORD_PREFIX}/orders/update-pass-order`,
    IMPORT_FILE: `${ORD_PREFIX}/orders/import`,
    IMPORT_FILE_PANCAKE: `${ORD_PREFIX}/orders/import-pancake`,
    IMPORT_FILE_TIKTOK: `${ORD_PREFIX}/orders/import-tiktok`,
    IMPORT_FILE_LAZADA: `${ORD_PREFIX}/orders/import-lazada`,
    IMPORT_FILE_SHOPPE: `${ORD_PREFIX}/orders/import-shopee`,
    IMPORT_FILE_TIKI: `${ORD_PREFIX}/orders/import-tiki`,
    // REPORT
    GET_REFUND_REASON: `${RPT_PREFIX}/revenue-online/reason-return`,
    // Setting
    GET_ORDER_SETTING: `${ORD_PREFIX}/orders/setting`,
    LINK_AUTH_TIKTOK: `${ORD_PREFIX}/orders/tik-tok-shop/shop-link`,
    LINK_AUTH_LAZADA: `${ORD_PREFIX}/orders/lazada/get-url-login`,
    SYNC_ORDER_TIKTOK: `${ORD_PREFIX}/orders/tik-tok-shop/sync-order-detail`,
    SYNC_SYSTEM_TIKTOK: `${ORD_PREFIX}/orders/tik-tok-shop/authenticate`,
    SYNC_SYSTEM_LAZADA: `${ORD_PREFIX}/orders/lazada/get-access-token`,
    GET_SHOP_TIKTOK: `${ORD_PREFIX}/orders/tik-tok-shop/info-shop-tiktok`,
    GET_SHOP_LAZADA: `${ORD_PREFIX}/orders/lazada/get-seller-info`,
    GET_TYPE_ORDER: `${ORD_PREFIX}/orders/master/type`,

    // Category
    GET_CATEGORY: `${BASE_PREFIX}/master/category`,

    // Sort Table
    SAVE_SORT_TABLE: `${BASE_PREFIX}/master/screens/save-sort-table`,
    ID_SORT_TABLE: `${BASE_PREFIX}/master/screens`,

    // Refer User
    REFER_USER: `${ORD_PREFIX}/orders/user/refer`,
    DETAIL_USER: `${BASE_PREFIX}/auth/me`,

    // Address
    GET_DISTRICT: `${BASE_PREFIX}/master/districts`,
    // BRANCH
    GET_BRANCH: `${BASE_PREFIX}/master/branches`,
    // EMPLOYEE
    GET_EMPLOYEE: `${HRM_PREFIX}/employees-management`,

    // ADDRESS MASTER
    GET_MASTER_PROVINCES: `${BASE_PREFIX}/master/provinces`,
    GET_MASTER_DISTRICT: `${BASE_PREFIX}/master/districts`,
    GET_MASTER_COMM: `${BASE_PREFIX}/master/commmunes`,

    // Message
    GET_MESSAGE_SYSTEM: `${BASE_PREFIX}/master/system-message`,

    //PAYMENT_SHIP
    GET_PAYMENT_SHIP: `${ORD_PREFIX}/orders/shipment-price`,

    //PRODUCT WIDTH BRANCH
    GET_PRODUCT_BRANCH: `${PRD_PREFIX}/products-management/branch-have-product`,
    ORDER_REPORT_VIEW: `${ORD_PREFIX}/orders/report`,
    PANCAKE: `${ORD_PREFIX}/orders/import/pancake`,
    LAZADA: `${ORD_PREFIX}/orders/import/lazada`,
    SHOPPE: `${ORD_PREFIX}/orders/import/shopee`,
    TIKTOK: `${ORD_PREFIX}/orders/import/tiktok`,
    TIKI: `${ORD_PREFIX}/orders/import/tiki`,
    GET_ORDER_OVERVIEW: `${ORD_PREFIX}/orders/overview-order`,

    DOWNLOAD_CONTROL_LAZADA: `${ORD_PREFIX}/orders/control-online/download/lazada-control`,
    IMPORT_BEST: `${ORD_PREFIX}/orders/control-shipping/import/best`,
    IMPORT_GHTK: `${ORD_PREFIX}/orders/control-shipping/import/ghtk`,
    GET_CONTROL_DELIVERY: `${ORD_PREFIX}/orders/control-shipping/get-control-shipping`,
    GET_CONTROL_DELIVERY_DETAIL: `${ORD_PREFIX}/orders/control-shipping/control-shipping-detail`,
    TIKTOK_CONTROL_ORDER: `${ORD_PREFIX}/orders/control-online/download/tiktok-control`,
    SHOPPE_CONTROL_ORDER: `${ORD_PREFIX}/orders/control-online/download/shopee-control`,
    LAZADA_CONTROL_ORDER: `${ORD_PREFIX}/orders/control-online/download/lazada-control`,

    IMPORT_FILE_CONTROL_ORDER_TIKTOK: `${ORD_PREFIX}/orders/control-online/import/control-tiktok`,
    IMPORT_FILE_CONTROL_ORDER_SHOPPE: `${ORD_PREFIX}/orders/control-online/import/control-shopee`,
    IMPORT_FILE_CONTROL_ORDER_LAZADA: `${ORD_PREFIX}/orders/control-online/import/control-lazada`,
    GET_CONTROL_ORDER_HISTORY: `${ORD_PREFIX}/orders/control-online`,
    GET_CONTROL_ORDER_DETAIL_HISTORY: `${ORD_PREFIX}/orders/control-online/detail`,
    GET_CONTROL_ORDER: `${ORD_PREFIX}/orders/control-online/all`,
    HISTORY_IMPORT: `${ORD_PREFIX}/orders/import/history`,
    GET_CONTROL_DELIVERY_HISTORY: `${ORD_PREFIX}/orders/control-shipping/get-history-import`,
    DOWNLOAD_CONTROL_CONTROL_GHTK: `${ORD_PREFIX}/orders/control-shipping/download/ghtk-control`,
    DOWNLOAD_CONTROL_CONTROL_BEST: `${ORD_PREFIX}/orders/control-shipping/download/best-control`,
    GET_ORDER_BRANCH: `${ORD_PREFIX}/orders/branch-info`,
    UPDATE_DEPARTMENT: `${ORD_PREFIX}/orders/other-info`,
};

export default ApiConstants;

export {
    POS_PREFIX,
    STK_PREFIX,
    HRM_PREFIX,
    PRD_PREFIX,
    BASE_PREFIX,
    WA_PREFIX,
};
