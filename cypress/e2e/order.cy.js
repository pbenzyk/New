import data from '../fixtures/example.json'
describe('Feature ช่องทางการขายอื่น', function () {
    // beforeEach(function () {
    //     cy.fixture('example.json').as('data')
    // })

    before("Goto link", function () {
        cy.clearAllCookies()
        // cy.visit("https://www.myorder.ai/auth/login")
        // cy.get('#email-input').type(data.email)
        // cy.get('#password-input').type(data.password)
        // cy.get('#login-button').click()
        // cy.get('.team-name').click()
        // cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

    }),
        it('altor-001', function () {
            cy.visit("https://www.myorder.ai/auth/login")
            cy.get('#email-input').type(data.email)
            cy.get('#password-input').type(data.password)
            cy.get('#login-button').click()
            cy.get('.team-name').click()
            cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

            cy.get('#line-button').should('not.have.class', "active")
        }),
        it('altor-002', function () {
            cy.visit("https://www.myorder.ai/auth/login")
            cy.get('#email-input').type(data.email)
            cy.get('#password-input').type(data.password)
            cy.get('#login-button').click()
            cy.get('.team-name').click()
            cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

            cy.get('#line-button > .img-channel-icon').click()
            cy.get('#line-button').should('have.class', "active")
        }),
        it('altor-003', function () {
            cy.visit("https://www.myorder.ai/auth/login")
            cy.get('#email-input').type(data.email)
            cy.get('#password-input').type(data.password)
            cy.get('#login-button').click()
            cy.get('.team-name').click()
            cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

            cy.get('#line-button > .img-channel-icon').click()
            cy.get('#line-button').should('have.class', "active")

            cy.get('#address-detect-input').type('คุณมายออร์เดอร์ ผู้น่ารัก 0831725655 69/429 หมู่2 ต.วิชิต อ.เมือง จ.ภูเก็ต 83000')
            cy.get('#customer-name-input').should('have.value', "คุณมายออร์เดอร์ ผู้น่ารัก")
            cy.get('#tel-input').should('have.value', "083-172-5655")
            cy.get('#address-input').should('have.value', "69/429 หมู่2")
            cy.get('#search-address')
                .should('have.attr', 'placeholder', 'พิมพ์เพื่อค้นหา')
            // cy.get('body').contains("ตำบลวิชิต อำเภอเมืองภูเก็ต จังหวัดภูเก็ต 83000")
        }),
        it('altor-004', function () {
            cy.visit("https://www.myorder.ai/auth/login")
            cy.get('#email-input').type(data.email)
            cy.get('#password-input').type(data.password)
            cy.get('#login-button').click()
            cy.get('.team-name').click()
            cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

            cy.get('#line-button > .img-channel-icon').click()
            cy.get('#line-button').should('have.class', "active")

            cy.get('#address-detect-input').type('0831725655 69/429 หมู่2 ต.วิชิต อ.เมือง จ.ภูเก็ต 83000')
            cy.get('.invalid-message').contains('กรุณากรอก ชื่อ-นามสกุล ของผู้รับ')
            cy.get('#tel-input').should('have.value', "083-172-5655")
            cy.get('#address-input').should('have.value', "69/429 หมู่2")
            cy.get('#search-address')
                .should('have.attr', 'placeholder', 'พิมพ์เพื่อค้นหา')
            // cy.get('body').contains("ตำบลวิชิต อำเภอเมืองภูเก็ต จังหวัดภูเก็ต 83000")
        }),
        it('altor-005', function () {
            cy.visit("https://www.myorder.ai/auth/login")
            cy.get('#email-input').type(data.email)
            cy.get('#password-input').type(data.password)
            cy.get('#login-button').click()
            cy.get('.team-name').click()
            cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

            cy.get('#line-button > .img-channel-icon').click()
            cy.get('#line-button').should('have.class', "active")

            cy.get('#address-detect-input').type('69/429 หมู่2 ต.วิชิต อ.เมือง จ.ภูเก็ต 83000')
            cy.get('.invalid-message').contains('กรุณากรอก ชื่อ-นามสกุล ของผู้รับ')
            cy.get('.name-box > .invalid-input > .invalid-message').contains('กรุณากรอกเบอร์โทรให้ครบถ้วน')
            cy.get('#address-input').should('have.value', "69/429 หมู่2")
            cy.get('#search-address')
                .should('have.attr', 'placeholder', 'พิมพ์เพื่อค้นหา')
            // cy.get('body').contains("ตำบลวิชิต อำเภอเมืองภูเก็ต จังหวัดภูเก็ต 83000")
        }),
        it('altor-006', function () {
            cy.visit("https://www.myorder.ai/auth/login")
            cy.get('#email-input').type(data.email)
            cy.get('#password-input').type(data.password)
            cy.get('#login-button').click()
            cy.get('.team-name').click()
            cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

            cy.get('#line-button > .img-channel-icon').click()
            cy.get('#line-button').should('have.class', "active")

            cy.get('#address-detect-input').type('คุณมายออร์เดอร์ ผู้น่ารัก 0831725655 69/429 หมู่2 ต.วิชิต อ.เมือง จ.ภูเก็ต 83000')
            cy.get('#customer-name-input').should('have.value', "คุณมายออร์เดอร์ ผู้น่ารัก")
            cy.get('#tel-input').should('have.value', "083-172-5655")
            cy.get('#address-input').should('have.value', "69/429 หมู่2")
            cy.get(':nth-child(9) > .invalid-input > .invalid-message').contains('ข้อมูลไม่ครบถ้วน กรุณากรอกตำแหน่งของผู้รับ')

        }),
        it('altor-007', function () {
            cy.visit("https://www.myorder.ai/auth/login")
            cy.get('#email-input').type(data.email)
            cy.get('#password-input').type(data.password)
            cy.get('#login-button').click()
            cy.get('.team-name').click()
            cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

            cy.get('#line-button > .img-channel-icon').click()
            cy.get('#line-button').should('have.class', "active")
            cy.get('#customer-name-input').type(data.address.name)
            cy.get('#tel-input').type(data.address.tel)
            cy.get('#address-input').type(data.address.address1)
            cy.get('#search-address').type(data.address.address2)
            cy.get('#email-input').type(data.address.email)
            cy.get('#comment-input').type(data.address.comment)
        }),
        it('altor-008', function () {
            cy.visit("https://www.myorder.ai/auth/login")
            cy.get('#email-input').type(data.email)
            cy.get('#password-input').type(data.password)
            cy.get('#login-button').click()
            cy.get('.team-name').click()
            cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

            cy.get('#line-button > .img-channel-icon').click()
            cy.get('#line-button').should('have.class', "active")
            cy.get('#customer-name-input').type(data.address.longName)
            cy.get('.invalid-message').contains('ไม่สามารถใช้ชื่อนี้ได้ เนื่องจากเกินความยาวที่กำหนด')
        }),
        it('altor-009', function () {
            cy.visit("https://www.myorder.ai/auth/login")
            cy.get('#email-input').type(data.email)
            cy.get('#password-input').type(data.password)
            cy.get('#login-button').click()
            cy.get('.team-name').click()
            cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

            cy.get('#line-button > .img-channel-icon').click()
            cy.get('#line-button').should('have.class', "active")
            cy.get('#tel-input').type(data.address.shortTel)
            cy.get('.invalid-message').contains('ไม่สามารถใช้ชื่อนี้ได้ เนื่องจากเกินความยาวที่กำหนด')
        }),
        it('altor-010', function () {
            cy.visit("https://www.myorder.ai/auth/login")
            cy.get('#email-input').type(data.email)
            cy.get('#password-input').type(data.password)
            cy.get('#login-button').click()
            cy.get('.team-name').click()
            cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

            cy.get('#line-button').click()
            cy.get('#customer-name-input').click()
            cy.get('.name-box > .invalid-input > .invalid-message').contains('กรุณากรอก ชื่อ-นามสกุล ของผู้รับ')
            cy.get('#tel-input').click()
            cy.get(':nth-child(5) > .invalid-input > .invalid-message').contains('กรุณากรอกเบอร์โทรให้ครบถ้วน')
            cy.get('#address-input').click()
            cy.get(':nth-child(7) > .invalid-input > .invalid-message').contains('กรุณากรอกที่อยู่')
            cy.get('#search-address').click()
            cy.get('#email-input').click()
            cy.get('#comment-input').click()
        }),
        // it('altor-012', function () {
        //     cy.visit("https://www.myorder.ai/auth/login")
        //     cy.get('#email-input').type(data.email)
        //     cy.get('#password-input').type(data.password)
        //     cy.get('#login-button').click()
        //     cy.get('.team-name').click()
        //     cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

        //     cy.get('#line-button').click()
        //     cy.get('#customer-name-input').click()
        //     cy.get('#system-product-add').click()
        //     cy.get('.product-menu > :nth-child(4)').click()
        //     cy.get('#custom-product-name-input-0').type(data.product.name)
        //     cy.get('#custom-product-price-input-0').type(data.product.price)
        //     cy.get('#custom-product-weight-input-0').type(data.product.weight)
        //     cy.get('.col-10 > .page-footer > .bottom-stat > .action > #select-product-button').click()

        // }),
        it('altor-013', function () {
            cy.visit("https://www.myorder.ai/auth/login")
            cy.get('#email-input').type(data.email)
            cy.get('#password-input').type(data.password)
            cy.get('#login-button').click()
            cy.get('.team-name').click()
            cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

            cy.get('#line-button').click()
            cy.get('#customer-name-input').click()
            cy.get('#custom-product-add').click()
            cy.get('#custom-product-name-input-0').type(data.product.name)
            cy.get('#custom-product-price-input-0').type(data.product.price)
            cy.get('#custom-product-weight-input-0').type(data.product.weight)
            cy.get('.col-10 > .page-footer > .bottom-stat > .action > #select-product-button').click()

        }),
        it('altor-015', function () {
            cy.visit("https://www.myorder.ai/auth/login")
            cy.get('#email-input').type(data.email)
            cy.get('#password-input').type(data.password)
            cy.get('#login-button').click()
            cy.get('.team-name').click()
            cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

            cy.get('#line-button').click()
            cy.get('.payment-type > .dropdown > #dropdownMenuButton').click()
            cy.get('#cod > .mb-0 > .child-title > .group-title > .ng-star-inserted').contains('ชำระเงินปลายทาง (COD)').as('bank')
            cy.get('@bank').click()
        }),
        it('altor-015', function () {
            cy.visit("https://www.myorder.ai/auth/login")
            cy.get('#email-input').type(data.email)
            cy.get('#password-input').type(data.password)
            cy.get('#login-button').click()
            cy.get('.team-name').click()
            cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

            cy.get('#line-button').click()
            cy.get('.payment-type > .dropdown > #dropdownMenuButton').click()
            cy.get('#cod > .mb-0 > .child-title > .group-title > .ng-star-inserted').contains('ชำระเงินปลายทาง (COD)').as('bank')
            cy.get('@bank').click()
        }),
        it('altor-016', function () {
            cy.visit("https://www.myorder.ai/auth/login")
            cy.get('#email-input').type(data.email)
            cy.get('#password-input').type(data.password)
            cy.get('#login-button').click()
            cy.get('.team-name').click()
            cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

            cy.get('#line-button').click()
            cy.get('.payment-type > .dropdown > #dropdownMenuButton').click()
            cy.get('#bank > .mb-0 > .child-title > .group-title > .selected').contains('โอนเงิน (BANK)').as('bank')
            cy.get('@bank').click()
            cy.get('.input-card-area').selectFile(data.slip.image)
            cy.get('#amount-input').type(data.slip.amount)
            cy.get('#date-input').type(data.slip.date)
            cy.get('#time-input').type(data.slip.time)
            cy.get('#receive-payment-input').type(data.slip.name)

        }),
        it('altor-017', function () {
            cy.visit("https://www.myorder.ai/auth/login")
            cy.get('#email-input').type(data.email)
            cy.get('#password-input').type(data.password)
            cy.get('#login-button').click()
            cy.get('.team-name').click()
            cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

            cy.get('#line-button').click()

            cy.get('#address-detect-input').type('คุณมายออร์เดอร์ ผู้น่ารัก 0831725655 69/429 หมู่2 ต.วิชิต อ.เมือง จ.ภูเก็ต 83000')

            cy.get('#customer-name-input').click()
            cy.get('#custom-product-add').click()
            cy.get('#custom-product-name-input-0').type(data.product.name)
            cy.get('#custom-product-price-input-0').type(data.product.price)
            cy.get('#custom-product-weight-input-0').type(data.product.weight)
            cy.get('.col-10 > .page-footer > .bottom-stat > .action > #select-product-button').click()

            cy.get('.payment-type > .dropdown > #dropdownMenuButton').click()
            cy.get('#bank > .mb-0 > .child-title > .group-title > .selected').contains('โอนเงิน (BANK)').as('bank')
            cy.get('@bank').click()
            cy.get('.input-card-area').selectFile(data.slip.image).wait(5000)
            cy.get('#amount-input').type(data.slip.amount)
            cy.get('#date-input').type(data.slip.date)
            cy.get('#time-input').type(data.slip.time)
            cy.get('#receive-payment-input').type(data.slip.name)

            cy.get('.confirm-button').click().wait(5000)
            cy.get('#table-name-label-0').contains('คุณมายออร์เดอร์ ผู้น่ารัก')
        }),
        it('altor-019', function () {
            cy.visit("https://www.myorder.ai/auth/login")
            cy.get('#email-input').type(data.email)
            cy.get('#password-input').type(data.password)
            cy.get('#login-button').click()
            cy.get('.team-name').click()
            cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

            cy.get('#table-name-label-0').click()
            cy.get('#handle-click-edit-order').click()

            cy.get(':nth-child(2) > #customer-name-input').type("02")
            cy.get('#customer-tel-input').clear().type("0830275699")
            cy.get('#customer-address-input').clear().type("69/429 หมู่4")
            cy.get('.plus-circle').click()
            cy.get(':nth-child(4) > .sub-summary-result').contains('300.00 บาท')
            cy.get('#submit-change-order-btn').click()
        }),
        it('altor-027', function () {
            cy.visit("https://www.myorder.ai/auth/login")
            cy.get('#email-input').type(data.email)
            cy.get('#password-input').type(data.password)
            cy.get('#login-button').click()
            cy.get('.team-name').click()
            cy.get('.header-text').contains('เพิ่มสินค้าใหม่จากช่องทางการขายอื่น')

            cy.get('.checkboxrow').click()
            cy.get('#remove-order-btn').click()
            cy.get('.form-group > .form-control').type('ลบ')
            cy.get('#confirm-submit-button').click()
        })

})