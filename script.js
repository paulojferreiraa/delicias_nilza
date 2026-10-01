// ==========================================
// DELÍCIAS DA NILZA
// JAVASCRIPT PRINCIPAL
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // VARIÁVEIS
    // =========================

    let cart = [];

    let selectedMeal = {
        size: "300g",
        price: 17.99,
        carb: "Arroz Integral",
        meat: "Carne Moída",
        side: "Mix de Legumes"
    };

    // =========================
    // MENU MOBILE
    // =========================

    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");

            const icon = mobileMenuBtn.querySelector("i");

            if (mobileMenu.classList.contains("hidden")) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            } else {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            }
        });
    }

    // Fechar menu ao clicar em algum link
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu?.classList.add("hidden");

            const icon = mobileMenuBtn?.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });
    });

    // =========================
    // ABAS DO CARDÁPIO
    // =========================

    const tabButtons = document.querySelectorAll(".menu-tab-btn");
    const tabContents = document.querySelectorAll(".menu-tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {

            const target = button.dataset.tab;

            tabButtons.forEach(btn => {
                btn.classList.remove(
                    "active",
                    "bg-brand-dark",
                    "text-white"
                );

                btn.classList.add(
                    "bg-white",
                    "text-gray-700"
                );
            });

            button.classList.add(
                "active",
                "bg-brand-dark",
                "text-white"
            );

            button.classList.remove(
                "bg-white",
                "text-gray-700"
            );

            tabContents.forEach(content => {
                content.classList.add("hidden");
                content.classList.remove("block");
            });

            const targetContent =
                document.getElementById(`tab-${target}`);

            if (targetContent) {
                targetContent.classList.remove("hidden");
                targetContent.classList.add("block");
            }
        });
    });

    // =========================
    // TAMANHO DA MARMITA
    // =========================

    document.querySelectorAll(".builder-size-btn").forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".builder-size-btn")
                .forEach(btn => {
                    btn.classList.remove(
                        "active",
                        "bg-brand-dark",
                        "text-white"
                    );

                    btn.classList.add(
                        "bg-white",
                        "text-gray-800"
                    );
                });

            button.classList.add(
                "active",
                "bg-brand-dark",
                "text-white"
            );

            button.classList.remove(
                "bg-white",
                "text-gray-800"
            );

            selectedMeal.size = button.dataset.size;
            selectedMeal.price = Number(button.dataset.price);

            updateMealSummary();
        });
    });

    // =========================
    // CARBOIDRATO
    // =========================

    document.querySelectorAll(".builder-carb-btn").forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".builder-carb-btn")
                .forEach(btn => {
                    btn.classList.remove(
                        "active",
                        "border-brand-orange",
                        "bg-brand-orange/10",
                        "text-brand-terracotta"
                    );

                    btn.classList.add(
                        "border-gray-200",
                        "text-gray-700"
                    );
                });

            button.classList.add(
                "active",
                "border-brand-orange",
                "bg-brand-orange/10",
                "text-brand-terracotta"
            );

            button.classList.remove(
                "border-gray-200",
                "text-gray-700"
            );

            selectedMeal.carb = button.dataset.carb;

            updateMealSummary();
        });
    });

    // =========================
    // CARNE
    // =========================

    document.querySelectorAll(".builder-meat-btn").forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".builder-meat-btn")
                .forEach(btn => {
                    btn.classList.remove(
                        "active",
                        "border-brand-orange",
                        "bg-brand-orange/10",
                        "text-brand-terracotta"
                    );

                    btn.classList.add(
                        "border-gray-200",
                        "text-gray-700"
                    );
                });

            button.classList.add(
                "active",
                "border-brand-orange",
                "bg-brand-orange/10",
                "text-brand-terracotta"
            );

            button.classList.remove(
                "border-gray-200",
                "text-gray-700"
            );

            selectedMeal.meat = button.dataset.meat;

            updateMealSummary();
        });
    });

    // =========================
    // ACOMPANHAMENTO
    // =========================

    document.querySelectorAll(".builder-side-btn").forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".builder-side-btn")
                .forEach(btn => {
                    btn.classList.remove(
                        "active",
                        "border-brand-orange",
                        "bg-brand-orange/10",
                        "text-brand-terracotta"
                    );

                    btn.classList.add(
                        "border-gray-200",
                        "text-gray-700"
                    );
                });

            button.classList.add(
                "active",
                "border-brand-orange",
                "bg-brand-orange/10",
                "text-brand-terracotta"
            );

            button.classList.remove(
                "border-gray-200",
                "text-gray-700"
            );

            selectedMeal.side = button.dataset.side;

            updateMealSummary();
        });
    });

    // =========================
    // ATUALIZAR RESUMO
    // =========================

    function updateMealSummary() {

        const size = document.getElementById("summary-size");
        const carb = document.getElementById("summary-carb");
        const meat = document.getElementById("summary-meat");
        const side = document.getElementById("summary-side");
        const price = document.getElementById("summary-price");

        if (size) size.textContent = selectedMeal.size;
        if (carb) carb.textContent = selectedMeal.carb;
        if (meat) meat.textContent = selectedMeal.meat;
        if (side) side.textContent = selectedMeal.side;

        if (price) {
            price.textContent = formatPrice(selectedMeal.price);
        }
    }

    // =========================
    // ADICIONAR ITEM AO CARRINHO
    // =========================

    document.querySelectorAll("[data-add-item]").forEach(button => {

        button.addEventListener("click", () => {

            const title = button.dataset.itemTitle;
            const priceValue = button.dataset.itemPrice;

            let price = Number(priceValue);

            if (isNaN(price)) {
                price = 0;
            }

            cart.push({
                title,
                price
            });

            updateCart();

            openCart();
        });
    });

    // =========================
    // ADICIONAR MARMITA PERSONALIZADA
    // =========================

    const addCustomMealBtn =
        document.getElementById("add-custom-meal-btn");

    if (addCustomMealBtn) {

        addCustomMealBtn.addEventListener("click", () => {

            cart.push({
                title:
                    `Marmita Fitness ${selectedMeal.size} - ` +
                    `${selectedMeal.carb}, ${selectedMeal.meat}, ${selectedMeal.side}`,

                price: selectedMeal.price
            });

            updateCart();

            openCart();
        });
    }

    // =========================
    // BOTÃO WHATSAPP DA MARMITA
    // =========================

    const directWhatsappBtn =
        document.getElementById("direct-whatsapp-meal-btn");

    if (directWhatsappBtn) {

        directWhatsappBtn.addEventListener("click", () => {

            const message =
                `Olá! Gostaria de pedir uma Marmita Fitness ${selectedMeal.size}.\n\n` +
                `Carboidrato: ${selectedMeal.carb}\n` +
                `Carne: ${selectedMeal.meat}\n` +
                `Acompanhamento: ${selectedMeal.side}\n` +
                `Valor: ${formatPrice(selectedMeal.price)}`;

            openWhatsApp(message);
        });
    }

    // =========================
    // COMBOS
    // =========================

    document.querySelectorAll("[data-combo-btn]").forEach(button => {

        button.addEventListener("click", () => {

            const title = button.dataset.title;
            const price = Number(button.dataset.price);

            cart.push({
                title,
                price
            });

            updateCart();

            openCart();
        });
    });

    // =========================
    // ATUALIZAR CARRINHO
    // =========================

    function updateCart() {

        const container =
            document.getElementById("cart-items-container");

        const totalElement =
            document.getElementById("cart-total-price");

        const badge =
            document.getElementById("cart-badge");

        if (!container) return;

        container.innerHTML = "";

        if (cart.length === 0) {

            container.innerHTML = `
                <div class="text-center text-gray-500 py-10">
                    <i class="fa-solid fa-cart-shopping text-4xl mb-3 text-gray-300"></i>
                    <p>Seu carrinho está vazio.</p>
                </div>
            `;

        } else {

            cart.forEach((item, index) => {

                const itemElement = document.createElement("div");

                itemElement.className =
                    "flex justify-between gap-3 border-b border-brand-sand pb-3";

                itemElement.innerHTML = `
                    <div class="flex-1">
                        <div class="font-semibold text-sm text-brand-dark">
                            ${item.title}
                        </div>

                        <div class="text-brand-orange font-bold text-sm mt-1">
                            ${item.price > 0 ? formatPrice(item.price) : "Consultar"}
                        </div>
                    </div>

                    <button
                        class="remove-cart-item text-red-500 hover:text-red-700"
                        data-index="${index}"
                        title="Remover"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>
                `;

                container.appendChild(itemElement);
            });
        }

        const total = cart.reduce(
            (sum, item) => sum + item.price,
            0
        );

        if (totalElement) {
            totalElement.textContent = formatPrice(total);
        }

        if (badge) {

            if (cart.length > 0) {
                badge.textContent = cart.length;
                badge.classList.remove("hidden");
            } else {
                badge.classList.add("hidden");
            }
        }

        document
            .querySelectorAll(".remove-cart-item")
            .forEach(button => {

                button.addEventListener("click", () => {

                    const index =
                        Number(button.dataset.index);

                    cart.splice(index, 1);

                    updateCart();
                });
            });
    }

    // =========================
    // MODAL DO CARRINHO
    // =========================

    const cartModal =
        document.getElementById("cart-modal");

    const cartModalBtn =
        document.getElementById("cart-modal-btn");

    const closeCartBtn =
        document.getElementById("close-cart-btn");

    function openCart() {

        if (cartModal) {
            cartModal.classList.remove("hidden");
        }
    }

    function closeCart() {

        if (cartModal) {
            cartModal.classList.add("hidden");
        }
    }

    cartModalBtn?.addEventListener("click", openCart);
    closeCartBtn?.addEventListener("click", closeCart);

    cartModal?.addEventListener("click", event => {

        if (event.target === cartModal) {
            closeCart();
        }
    });

    // =========================
    // ENVIAR PEDIDO WHATSAPP
    // =========================

    const sendWhatsappBtn =
        document.getElementById("send-whatsapp-btn");

    sendWhatsappBtn?.addEventListener("click", () => {

        if (cart.length === 0) {

            alert("Seu carrinho está vazio.");

            return;
        }

        let message =
            "Olá! Gostaria de fazer um pedido pelo site da Delícias da Nilza.%0A%0A";

        cart.forEach((item, index) => {

            message +=
                `${index + 1}. ${item.title} - ` +
                `${item.price > 0 ? formatPrice(item.price) : "Consultar"}%0A`;
        });

        const total = cart.reduce(
            (sum, item) => sum + item.price,
            0
        );

        message +=
            `%0ATotal estimado: ${formatPrice(total)}%0A%0A`;

        message +=
            "Gostaria de confirmar o pedido e combinar a entrega.";

        openWhatsApp(message);
    });

    // =========================
    // FUNÇÕES AUXILIARES
    // =========================

    function formatPrice(value) {

        return value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    function openWhatsApp(message) {

        const phone = "5541998642733";

        const url =
            `https://wa.me/${phone}?text=${encodeURIComponent(
                message.replaceAll("%0A", "\n")
            )}`;

        window.open(url, "_blank");
    }

    // Inicialização
    updateMealSummary();
    updateCart();

}); 