class sauceDemoPage 
{
    insertUsername(username)
    {
        cy.get("#user-name").type(username, {log: false});
    }

    insertPassword(password)
    {
        cy.get("#password").type(password, {log: false});
    }

    clickLoginButton()
    {
        cy.get("#login-button").click();
    }

    selectFilterOption(option)
    {
        cy.get(".product_sort_container").select(option);
    }

    sortElementsByName()
    {
        cy.get(".inventory_item_name").then((elements) => {
            
            let objectNames = [];
            elements.each((index, element) => {
                objectNames.push(element.innerText);
            });
            let sortedNames = [...objectNames].sort();
            expect(objectNames).to.deep.equal(sortedNames);

        });
    }

    sortElementsByNameReverse()
    {
        cy.get(".inventory_item_name").then((elements) => {
            
            let objectNames = [];
            elements.each((index, element) => {
                objectNames.push(element.innerText);
            });
            let sortedNames = [...objectNames].sort().reverse();
            expect(objectNames).to.deep.equal(sortedNames);

        });
    }

}

export default sauceDemoPage;