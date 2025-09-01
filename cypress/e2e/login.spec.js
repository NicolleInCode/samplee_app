describe('Prueba de login', () => {
    it('verifica que el login funcione correctamente', () => {
        cy.visit('/login');
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
        cy.contains('Bienvenido').should('be.visible');
    });

    it('verifica credenciales inválidas', () => {
        cy.visit('/login');
        cy.get('#username').type('usuario_incorrecto');
        cy.get('#password').type('password_incorrecto');
        cy.get('button[type="submit"]').click();
        cy.contains('Credenciales inválidas').should('be.visible');
    });
});