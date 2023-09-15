import React from 'react'
// import IconSaleDelivery from 'assets/images/icons/icon-sale-delivery'
import IconSemiNormal from 'assets/images/icons/icon-semi-normal'
import IconSaleDelivery from 'assets/images/icons/icon-sale-delivery'

const constants = {
    BILL_TYPE: {
        id: 1,
        name: 'Hóa đơn',
    },
    RETURN_TYPE: {
        id: 2,
        name: 'Trả hàng',
    },
    SALES_TYPE: {
        SALES_NORMAL: 1,
        SALES_DELIVERY: 2,
        SALES_RETURN: 3,
    },
    ARR_BAR_FOOTER: [
        {
            id: 1,
            icon: <IconSemiNormal className="icon-footer" />,
            title: 'Bán thường',
        },
        {
            id: 2,
            icon: <IconSaleDelivery className="icon-footer" />,
            title: 'Bán giao hàng',
        },
        {
            id: 3,
            icon: <IconSaleDelivery className="icon-footer" />,
            title: 'Trả hàng',
        },
    ],
    SIZE_DESKTOP: {
        DESKTOP_MAX: 1920,
        DESKTOP_NORMAL: 1336,
    },
    WEIGHT_UNIT: [
        { id: 1, title: 'gram' },
        { id: 2, title: 'kg' },
    ],
    INPUT_TYPE: {
        TEXT: 'text',
        MONEY: 'money',
        NUMBER: 'number',
        DECIMAL: 'decimal',
    },
    RATE_POINT_TO_MONEY: 50,
    SIZE_PRINT: {
        a4: {
            width: '210mm',
            height: '297mm',
        },
        k80: {
            width: '80mm',
            height: 'auto',
        },
    },
    LIMIT_PAGINATION: [10, 20, 50, 100],
    DEFAULT_RECORDS_PER_PAGE: 10,
    PAYMENT_METHOD: {
        COD: {
            VALUE: 10,
            TEXT: 'Thanh toán khi nhận hàng'
        }
    },
    PAYMENT_STATUS: {
        PAYING: {
            VALUE: 10,
            TEXT: 'Đang thanh toán'
        },
        PAID: {
            VALUE: 60,
            TEXT: 'Đã thanh toán'
        }
    },
    ASSET_ITEMS: [
        {
            value: 10,
            label: 'Tài sản cố định',
            key: 10,
            Level: 10,
        },
        {
            value: 20,
            label: 'Công cụ dụng cụ',
            key: 20,
            Level: 20,
        },
    ],
    ASSET_STATUS_BUY: [
        {
            value: 10,
            label: 'Mua mới',
            key: 10,
            Level: 10,
        },
        {
            value: 20,
            label: 'Mua cũ',
            key: 20,
            Level: 20,
        },
    ],
    ASSET_CURRENT_STATUS: [
        {
            value: 10,
            label: 'Hoạt động tốt',
            key: 10,
            Level: 10,
        },
        {
            value: 20,
            label: 'Hỏng nhẹ, hoạt động bình thường',
            key: 20,
            Level: 20,
        },
    ],
    ASSET_STATUS_ASSET_VERIFICATION: [
        {
            value: 10,
            label: 'Mới',
            key: 10,
        },
        {
            value: 20,
            label: 'Cũ còn tốt',
            key: 20,
        },
        {
            value: 30,
            label: 'Lỗi',
            key: 30,
        },
        {
            value: 40,
            label: 'Hỏng',
            key: 40,
        },
        {
            value: 50,
            label: 'Bảo hành',
            key: 35,
        },
    ]
}
export default constants
