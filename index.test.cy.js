import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()

describe('frontend tests', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/a*').as('getApi')
    cy.visit('')
    cy.reload()
    cy.wait('@getApi').its('response.statusCode').should('be.oneOf', [200, 304])
    cy.get('#endpoint').select(0, { force: true })
    cy.wait('@getApi').its('response.statusCode').should('be.oneOf', [200, 304])
    cy.wait(1000)
  })

  it('T01 should have all the options', () => {
    cy.get('#endpoint option').should('have.length', 14)
    for (let i=1; i<=14; i++) {
      cy.get(`#endpoint option[id='a${i}']`).should('exist')
    }
  })

  it('T02 should be able to switch the select and load new content', () => {
    cy.get('#mycontent').invoke('text').then(b => {
      const before = String(b).trim()
      cy.get('#endpoint').select(2) // fixed by m100re / Maximilian Schnabl
      cy.wait('@getApi').its('response.statusCode').should('be.oneOf', [200, 304])
      cy.wait(1000)
      cy.get('#mycontent').invoke('text').should((a) => {
        const after = String(a).trim()
        expect(before).not.to.eq(after)
        expect(after).not.to.eq('')
        expect(before).not.to.eq('')
        expect(before).not.to.eq('(Daten konnten nicht geladen werden)')
        expect(after).not.to.eq('(Daten konnten nicht geladen werden)')
      })
    })
  })

  it('T03 should clear content when switching options', () => {
    cy.intercept('GET', '**/a*', {
      statusCode: 200,
      body: [{ thisis: 'fake content' }],
    }).as('getApiError')

    cy.get('#endpoint').select(1)
    cy.wait('@getApiError').its('response.statusCode').should('be.oneOf', [200])
    cy.wait(1000)
    cy.get('#mycontent').invoke('text').should((a) => {
      const after = String(a).trim()
      expect(after).not.to.eq('')
      expect(after).not.to.contain('Daten konnten nicht geladen werden')
      expect(after).to.eq('fake content')
    })
  })

  it('T04 should display an error message', () => {
    cy.intercept('GET', '**/a*', {
      statusCode: 404,
      body: '',
    }).as('getApiError')

    cy.get('#endpoint').select(1)
    cy.wait('@getApiError').its('response.statusCode').should('be.oneOf', [404])
    cy.wait(1000)
    cy.get('#mycontent').invoke('text').should((a) => {
      const after = String(a).trim()
      expect(after).not.to.eq('')
      expect(after).to.contain('Daten konnten nicht geladen werden')
    })
  })
})
