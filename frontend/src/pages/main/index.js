import React, {Component} from 'react';
import api from '../../services/api.js';
import { Link } from 'react-router-dom';

import './styles.css';

import Whatsapp from '../../assets/whatsapp.svg';
import Trash from '../../assets/trash.svg';

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    };

    // executa uma ação assim que o componente é exibido em tela
    componentDidMount() {
        this.loadProducts();
    };

    loadProducts = async (page = 1) => {
        const response = await api.get(`./products?page=${page}`);

        const {docs, ...productInfo} = response.data;

        this.setState({products: docs, productInfo, page});

        // console.log(docs);
    };

    prevPage = () => {
        const {page, productInfo} = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        const {page, productInfo} = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    
    remove = (id) => {
        const response =  api.delete(`/products/${id}`);
        this.setState({product: response.data});
        this.loadProducts();            
    };
    
    render() {
        const {products, page, productInfo} = this.state;

        return (
            <div className="product-list">
                <h1>LIVROS A VENDA</h1>
                <div id="productsAll">
                    {products.map(product => (
                            <article key={product._id}>
                                <div id="header-card">
                                    <strong>Nome do Livro: {product.nameBook}</strong>
                                    <a href onClick = { () => this.remove(product._id)} class="button">
                                        <img src={Trash} alt="lixo" title="Tem certeza que quer apagar" id="lixo" />
                                    </a>
                                </div>
                                <p>Vendido por: {product.bookStore}</p>
                                <div id="phone">
                                    <p>Telefone da loja: {product.phone}</p>
                                    <a href={`https://api.whatsapp.com/send?1=pt_BR&phone=${product.phone}&text=Quero saber o valor, e como é feita a entrega`} class="button" target="_blank ">
                                        <img src={Whatsapp} alt="whatsapp"/>
                                    </a>
                                </div>
                                <p id="price">Preço: R$ {product.price}</p>
                                <Link to={`/products/${product._id}`}>Acessar</Link>
                            </article>
                    ))}
                </div>
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Proximo</button>
                </div>
            </div>
        )
    }
}