export const selectCarImage = (price: number) => {
    if (price <= 10000) { 
        return '/car1.png'
    } else if (price > 10000 && price <= 25000) {
        return '/car2.png'
    } else if (price > 25000 && price <= 40000) {
        return '/car3.png'
    }
    return '/car4.png'
}