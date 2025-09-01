describe('Prueba de login', () => {
  it('Login correcto con admin/admin123', () => {
    cy.visit('http://localhost:5050/login')
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains('Login exitoso').should('be.visible')
  })
})
