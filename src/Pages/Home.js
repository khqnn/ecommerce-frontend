
import { getPopularCategories, getPopularProducts } from '../api/utils'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductSlider from '../components/ProductSlider'
import Slider from '../components/Slider'
import { BusinessData } from '../theme/BusinessWrapper'
import styled from 'styled-components'

const HomePageWrapper = styled.div`

`

const Home = () => {

    /**
     * Headings factory
     * generate 2 to 3 custom sections
     * 
     */

    const businessData = BusinessData()
    const slides = businessData.settings

    const popular_categories = getPopularCategories(businessData.id)
    const popular_products = getPopularProducts(businessData.id)

    return (
        <div>
            <Header />
            <Slider params={slides} />
            <Categories categories={popular_categories} heading="Popular Categories"/>
            <ProductSlider products={popular_products} heading="Popular Products"/>

            <Footer />
        </div>
    )
}

export default Home