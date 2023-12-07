import { businesses, categories, discountedProducts, latestProducts, popularProducts, products } from "../data"

export const getBusinessName = ()=>{

    return "lama"
}

export const getBusinessId = (business_name)=>{
    let businessId = null
    const business = businesses.find((b)=> b.name==business_name)

    if(business){
        businessId = business.id
    }

    return businessId
}

export const getProducts = (businessId)=>{
    return products
}

export const getPopularCategories = (businessId)=>{
    return categories
}

export const getPopularProducts = (businessId)=>{

    return popularProducts
}

export const getDiscountedProducts = (businessId)=>{

    return discountedProducts
}

export const getLatestProducts = (businessId)=>{

    return latestProducts
}

export const getBusinessSettings = (businessId)=>{
    const business = businesses.find(b=> b.id==businessId)
    
    return business
}