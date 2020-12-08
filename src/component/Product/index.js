import React from 'react'

export default class Product extends React.Component {
    componentDidMount() {
        this.props.fetchProduct()
    }
    render() {
        let { ProductData } = this.props
        let { isFetching, data = [], err } = ProductData;
        if (isFetching) {
            return (
                <fieldset>
                    <legend>Product</legend>
                    <h1>正在获取数据...</h1>
                </fieldset>
            )

        } else if (!isFetching && data.length) {
            return (
                <fieldset>
                    <legend>Product</legend>
                    <ul>
                        {data.map(item => {
                            return (
                                <li key={item.id}>
                                    商品名:
                                    <span>{item.title}</span>
                                    ---
                                    价格:
                                    <span>{item.price}</span>
                                    ---
                                    库存:
                                    <span>{item.inventory}</span>
                                    ---
                                    <button>加入购物车</button>
                                </li>
                            )
                        })}
                    </ul>
                </fieldset>
            )
        } else if (!isFetching && err) {
            return (
                <fieldset>
                    <legend>Product</legend>
                    <h1>数据获取失败</h1>
                </fieldset>
            )
        }

    }
}