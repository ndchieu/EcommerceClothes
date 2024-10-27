/*=============== HIỂN THỊ MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== HIỂN THỊ MENU =====*/
/* Kiểm tra xem biến có tồn tại không */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu') // Thêm lớp 'show-menu' để hiển thị menu
    })
}

/*===== ẨN MENU =====*/
/* Kiểm tra xem biến có tồn tại không */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu') // Xóa lớp 'show-menu' để ẩn menu
    })
}

/*=============== HIỂN THỊ GIỎ HÀNG ===============*/
const shoppingCart = document.getElementById('cart'),
    cartShop = document.getElementById('cart-shop'),
    cartClose = document.getElementById('cart-close')

/*===== HIỂN THỊ GIỎ HÀNG =====*/
/* Kiểm tra xem biến có tồn tại không */
if (cartShop) {
    cartShop.addEventListener('click', () => {
        shoppingCart.classList.add('show-cart') // Thêm lớp 'show-cart' để hiển thị giỏ hàng
    })
}

/*===== ẨN GIỎ HÀNG =====*/
/* Kiểm tra xem biến có tồn tại không */
if (cartClose) {
    cartClose.addEventListener('click', () => {
        shoppingCart.classList.remove('show-cart') // Xóa lớp 'show-cart' để ẩn giỏ hàng
    })
}

const login = document.getElementById('login'),
    loginButton = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close'),
    register = document.getElementById('register'),
    registerButton = document.getElementById('register-link'),
    registerClose = document.getElementById('register-close')

/* Hàm hiển thị hoặc ẩn login/register */
function toggleModal(modal, otherModal, showClass, otherClass) {
    modal.classList.add(showClass) // Thêm lớp để hiển thị modal hiện tại
    otherModal.classList.remove(otherClass) // Xóa lớp của modal khác để ẩn nó
}

/* Hiển thị login và ẩn register nếu đang mở */
if (loginButton) {
    loginButton.addEventListener('click', () => {
        toggleModal(login, register, 'show-login', 'show-register')
    })
}

/* Hiển thị register và ẩn login nếu đang mở */
if (registerButton) {
    registerButton.addEventListener('click', () => {
        toggleModal(register, login, 'show-register', 'show-login')
    })
}

/* Ẩn login */
if (loginClose) {
    loginClose.addEventListener('click', () => {
        login.classList.remove('show-login')
    })
}

/* Ẩn register */
if (registerClose) {
    registerClose.addEventListener('click', () => {
        register.classList.remove('show-register')
    })
}

/*=============== SWIPER TRANG CHỦ ===============*/
var homeSwiper = new Swiper(' .home-swiper', {
    spaceBetween: 30, // Khoảng cách giữa các slide
    Loop: 'true', // Cho phép lặp vòng
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Cho phép click vào dấu chấm phân trang
    },
})

/*=============== THAY ĐỔI NỀN HEADER KHI CUỘN ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
        // Khi cuộn trang lớn hơn 50px, thêm lớp 'scroll-header' vào thẻ header
    if (this.scrollY >= 50) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header') // Xóa lớp 'scroll-header' nếu không cuộn
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER SẢN PHẨM MỚI ===============*/
var newSwiper = new Swiper(' .new-swiper', {
    spaceBetween: 16, // Khoảng cách giữa các slide
    centeredSlider: true, // Các slide được căn giữa
    slidesPerView: 'auto', // Hiển thị nhiều slide tự động
    Loop: 'true', // Cho phép lặp vòng
})

/*=============== HIỂN THỊ NÚT CUỘN LÊN ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
        // Khi cuộn trang cao hơn 350px, thêm lớp 'show-scroll' để hiển thị nút cuộn lên
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll') // Ẩn nút cuộn lên nếu nhỏ hơn 350px
}
window.addEventListener('scroll', scrollUp)

/*=============== HỎI ĐÁP (ACCORDION) ===============*/
const accordionItem = document.querySelectorAll('.questions__item')

accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toogleItem(item) // Mở item đang được nhấp
        if (openItem && openItem !== item) {
            toogleItem(openItem) // Đóng item đã mở nếu có
        }
    })
})

const toogleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content')
    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style') // Xóa style để đóng item
        item.classList.remove('accordion-open') // Xóa lớp 'accordion-open'
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px' // Thêm chiều cao động
        item.classList.add('accordion-open') // Thêm lớp 'accordion-open'
    }
}

/*=============== CHUYỂN ĐỔI PHONG CÁCH GIAO DIỆN ===============*/
const styleSwitcherToggle = document.querySelector('.style__switcher-toggler')
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style__switcher').classList.toggle('open') // Bật/tắt bảng chọn style
})

/*=============== ẨN BẢNG CHỌN STYLE KHI CUỘN ===============*/
window.addEventListener('scroll', () => {
    if (document.querySelector('.style__switcher').classList.contains('open')) {
        document.querySelector('.style__switcher').classList.remove('open') // Ẩn bảng chọn style khi cuộn
    }
})

/*=============== MÀU CHỦ ĐỀ ===============*/
function themeColors() {
    const colorStyle = document.querySelector('.js-color-style'),
        themeColorsContainer = document.querySelector('.js-theme-colors')

    themeColorsContainer.addEventListener('click', ({ target }) => {
        if (target.classList.contains('js-theme-color-item')) {
            localStorage.setItem('color', target.getAttribute('data-js-theme-color'))
            setColors() // Thiết lập màu chủ đề
        }
    })

    function setColors() {
        let path = colorStyle.getAttribute('href').split('/')
        path = path.slice(0, path.length - 1)
        colorStyle.setAttribute(
                'href',
                path.join('/') + '/' + localStorage.getItem('color') + '.css',
            ) // Đặt màu đã chọn

        if (document.querySelector('.js-theme-color-item.active')) {
            document
                .querySelector('.js-theme-color-item.active')
                .classList.remove('active') // Xóa lớp 'active' của màu hiện tại
        }
        document
            .querySelector(
                '[data-js-theme-color=' + localStorage.getItem('color') + ']',
            )
            .classList.add('active') // Thêm lớp 'active' cho màu mới
    }

    if (localStorage.getItem('color') !== null) {
        setColors() // Nếu có màu chủ đề trong localStorage, thiết lập màu đó
    } else {
        const defaultColor = colorStyle
            .getAttribute('href')
            .split('/')
            .pop()
            .split('.')
            .shift()
        document
            .querySelector('[data-js-theme-color' + defaultColor + ']')
            .classList.add('active') // Thiết lập màu mặc định
    }
}

themeColors() // Gọi hàm thiết lập màu chủ đề

/**VALIDATOR */
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    var selectorRules = {}

    function validate(inputElement, rule) {
        var errorElement = getParent(
            inputElement,
            options.formGroupSelector,
        ).querySelector(options.errorSelector)
        var errorMessage
        var rules = selectorRules[rule.selector]

        for (var i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        document.querySelector(rule.selector + ':checked'),
                    )
                    break
                default:
                    errorMessage = rules[i](inputElement.value)
            }
            if (errorMessage) break
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage
            getParent(inputElement, options.formGroupSelector).classList.add(
                'invalid',
            )
        } else {
            errorElement.innerText = ''
            getParent(inputElement, options.formGroupSelector).classList.remove(
                'invalid',
            )
        }
        return !errorMessage
    }

    var formElement = document.querySelector(options.form)
    if (formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault()

            var isFormValid = true

            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule)
                if (!isValid) {
                    isFormValid = false
                }
            })

            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]')
                    var formValues = Array.from(enableInputs).reduce(function(
                        values,
                        input,
                    ) {
                        switch (input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector(
                                    'input[name="' + input.name + '"]:checked',
                                ).value
                                break
                            case 'checkbox':
                                if (!input.matches(':checked')) return values
                                if (!Array.isArray(values[input.name])) values[input.name] = []
                                values[input.name].push(input.value)
                                break
                            case 'file':
                                values[input.name] = input.files
                                break
                            default:
                                values[input.name] = input.value
                        }
                        return values
                    }, {})

                    options.onSubmit(formValues)
                } else {
                    formElement.submit()
                }
            }
        }

        options.rules.forEach(function(rule) {
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }

            var inputElements = formElement.querySelectorAll(rule.selector)
            Array.from(inputElements).forEach(function(inputElement) {
                inputElement.onblur = function() {
                    validate(inputElement, rule)
                }

                inputElement.oninput = function() {
                    var errorElement = getParent(
                        inputElement,
                        options.formGroupSelector,
                    ).querySelector(options.errorSelector)
                    errorElement.innerText = ''
                    getParent(inputElement, options.formGroupSelector).classList.remove(
                        'invalid',
                    )
                }
            })
        })
    }
}

// Định nghĩa các rules
Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value ? undefined : message || `Vui lòng nhập trường này`
        },
    }
}

Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ?
                undefined :
                message || `Trường này phải là Email`
        },
    }
}

Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ?
                undefined :
                message || `Vui lòng nhập tối thiểu ${min} ký tự`
        },
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ?
                undefined :
                message || `Giá trị nhập vào không đúng`
        },
    }
}