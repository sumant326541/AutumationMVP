export default class ProductPage{

header(){return cy.get('.title')}

AddToCartButton(){return  cy.get('.btn.btn_primary.btn_small.btn_inventory')}
shopingCartBadge(){return  cy.get('.shopping_cart_link')}
addedProductCountInCart(){return  cy.get('.shopping_cart_badge')}
SauceLabsBackpackImage(){return  cy.get('#item_4_img_link img')}
SauceLabsBikeLightImage(){return  cy.get('#item_1_img_link img')}

verifyHeader(){
    this.header().should('have.text','Products')
}

verifySauceLabsBackpackImage(){
    this.SauceLabsBackpackImage().invoke('attr', 'src').should('eq',"/static/media/sauce-backpack-1200x1500.34e7aa42.jpg")
}
verifySauceLabsBikeLightImage(){
    this.SauceLabsBikeLightImage().invoke('attr', 'src').should('eq',"/static/media/bolt-shirt-1200x1500.c0dae290.jpg")
}





clickAddToCart(){
    this.AddToCartButton().eq(0).click()
}
verifyAddedProductCount(count){
    this.addedProductCountInCart().should('have.text',count)
}
}
