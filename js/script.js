// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Solar Calculator
const solarCalculator = document.getElementById('solarCalculator');
const calculatorResult = document.getElementById('calculatorResult');

// Package data based on the provided information
const packages = {
    cash: {
        'P16': {
            name: 'P16 (1.6 kW)',
            billRange: '1,000-2,000',
            panels: '3 แผง N-Type Double glass 580W',
            inverter: 'PSI Inverter',
            savings: '833',
            price: '43,900',
            description: 'เหมาะสำหรับบ้านขนาดเล็ก ค่าไฟ 1,000-2,000 บาท/เดือน'
        },
        'P33': {
            name: 'P33 (3.3 kW)',
            billRange: '2,001-3,500',
            panels: '6 แผง N-Type Double glass 580W',
            inverter: 'PSI Inverter',
            savings: '2,500',
            price: '89,000',
            description: 'เหมาะสำหรับบ้านขนาดกลาง ค่าไฟ 2,001-3,500 บาท/เดือน'
        },
        'P50-3': {
            name: 'P50-3 (5 kW)',
            billRange: '3,500-5,000',
            panels: '10 แผง N-Type Double glass 580W',
            inverter: 'PSI 3 Phase Inverter',
            savings: '3,900',
            price: '149,000',
            description: 'เหมาะสำหรับบ้านขนาดใหญ่ ค่าไฟ 3,500-5,000 บาท/เดือน'
        },
        'P100-3': {
            name: 'P100-3 (10 kW)',
            billRange: '5,001-15,000',
            panels: '20 แผง N-Type Double glass 580W',
            inverter: 'PSI 3 Phase Inverter',
            savings: '7,800',
            price: '259,000',
            description: 'เหมาะสำหรับอาคารพาณิชย์ขนาดเล็ก ค่าไฟ 5,001-15,000 บาท/เดือน'
        },
        'P25': {
            name: 'P25 kW (25 kW)',
            billRange: '15,001-35,000',
            panels: '48 แผง N-Type Double glass 580W',
            inverter: 'PSI 3 Phase Inverter',
            savings: '17,600',
            price: '625,000',
            description: 'เหมาะสำหรับอาคารพาณิชย์ขนาดกลาง ค่าไฟ 15,001-35,000 บาท/เดือน'
        },
        'P50': {
            name: 'P50 kW (50 kW)',
            billRange: '35,001-55,000',
            panels: '96 แผง N-Type Double glass 580W',
            inverter: 'PSI 3 Phase Inverter',
            savings: '37,600',
            price: '1,200,000',
            description: 'เหมาะสำหรับอาคารพาณิชย์ขนาดใหญ่ ค่าไฟ 35,001-55,000 บาท/เดือน'
        }
    },
    installment: {
        '3kW': {
            name: '3 kW',
            billRange: '2,000-3,500',
            panels: '6 แผง N-Type Double glass 580W',
            inverter: 'HUAWEI Inverter',
            savings: '2,500',
            price: '100,000',
            description: 'เหมาะสำหรับบ้านขนาดกลาง ค่าไฟ 2,000-3,500 บาท/เดือน'
        },
        '5kW': {
            name: '5 kW',
            billRange: '3,501-6,500',
            panels: '10 แผง N-Type Double glass 580W',
            inverter: 'HUAWEI Inverter',
            savings: '3,900',
            price: '173,000',
            description: 'เหมาะสำหรับบ้านขนาดใหญ่ ค่าไฟ 3,501-6,500 บาท/เดือน'
        },
        '10kW': {
            name: '10 kW',
            billRange: '6,501-14,500',
            panels: '20 แผง N-Type Double glass 580W',
            inverter: 'HUAWEI Inverter',
            savings: '7,800',
            price: '269,000',
            description: 'เหมาะสำหรับอาคารพาณิชย์ขนาดเล็ก ค่าไฟ 6,501-14,500 บาท/เดือน'
        },
        '30kW': {
            name: '30 kW',
            billRange: '14,501-25,000',
            panels: '48 แผง N-Type Double glass 580W',
            inverter: 'HUAWEI Inverter',
            savings: '19,125',
            price: '750,000',
            description: 'เหมาะสำหรับอาคารพาณิชย์ขนาดกลาง ค่าไฟ 14,501-25,000 บาท/เดือน'
        },
        '50kW': {
            name: '50 kW',
            billRange: '35,001-60,000',
            panels: '96 แผง N-Type Double glass 580W',
            inverter: 'HUAWEI Inverter',
            savings: '37,600',
            price: '1,250,000',
            description: 'เหมาะสำหรับอาคารพาณิชย์ขนาดใหญ่ ค่าไฟ 35,001-60,000 บาท/เดือน'
        }
    }
};

function getRecommendedPackage(electricBill, paymentMethod) {
    const packageData = paymentMethod === 'ผ่อนระยะยาว' ? packages.installment : packages.cash;
    
    // Find matching package based on electricity bill
    for (const [key, pkg] of Object.entries(packageData)) {
        const [min, max] = pkg.billRange.split('-').map(s => parseInt(s.replace(/,/g, '')));
        const billAmount = parseInt(electricBill.split('-')[0].replace(/,/g, ''));
        
        if (billAmount >= min && (max ? billAmount <= max : true)) {
            return pkg;
        }
    }
    
    // Default fallback
    return Object.values(packageData)[0];
}

solarCalculator.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Get recommended package
    const recommendedPackage = getRecommendedPackage(data.electricBill, data.paymentMethod);
    
    // Calculate ROI
    const monthlyPrice = parseInt(recommendedPackage.price.replace(/,/g, ''));
    const monthlySavings = parseInt(recommendedPackage.savings.replace(/,/g, ''));
    const paybackMonths = Math.ceil(monthlyPrice / monthlySavings);
    const paybackYears = Math.floor(paybackMonths / 12);
    const remainingMonths = paybackMonths % 12;
    
    // Display results
    calculatorResult.innerHTML = `
        <div class="result-header">
            <h3><i class="fas fa-lightbulb"></i> แพคเกจที่แนะนำสำหรับคุณ</h3>
        </div>
        <div class="result-content">
            <div class="package-card">
                <div class="package-header">
                    <h4>${recommendedPackage.name}</h4>
                    <div class="package-price">฿${recommendedPackage.price.toLocaleString()}</div>
                </div>
                <div class="package-details">
                    <div class="detail-item">
                        <i class="fas fa-solar-panel"></i>
                        <span>${recommendedPackage.panels}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-microchip"></i>
                        <span>${recommendedPackage.inverter}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-coins"></i>
                        <span>ประหยัดค่าไฟ ${recommendedPackage.savings.toLocaleString()} บาท/เดือน</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-clock"></i>
                        <span>คืนทุนใน ${paybackYears} ปี ${remainingMonths} เดือน</span>
                    </div>
                </div>
                <div class="package-description">
                    <p>${recommendedPackage.description}</p>
                </div>
                <div class="package-actions">
                    <button class="btn btn-primary" onclick="requestQuote('${recommendedPackage.name}')">
                        <i class="fas fa-file-alt"></i>
                        ขอใบเสนอราคา
                    </button>
                    <button class="btn btn-secondary" onclick="contactUs()">
                        <i class="fas fa-phone"></i>
                        ติดต่อเรา
                    </button>
                </div>
            </div>
            <div class="savings-chart">
                <h4>การประหยัดค่าไฟในระยะยาว</h4>
                <div class="chart-info">
                    <div class="chart-item">
                        <div class="chart-label">ปีที่ 1-3</div>
                        <div class="chart-value">คืนทุน</div>
                        <div class="chart-bar" style="width: 30%; background: #FF6B35;"></div>
                    </div>
                    <div class="chart-item">
                        <div class="chart-label">ปีที่ 4-10</div>
                        <div class="chart-value">กำไร ${(monthlySavings * 12 * 7).toLocaleString()} บาท</div>
                        <div class="chart-bar" style="width: 70%; background: #10B981;"></div>
                    </div>
                    <div class="chart-item">
                        <div class="chart-label">ปีที่ 11-30</div>
                        <div class="chart-value">กำไร ${(monthlySavings * 12 * 20).toLocaleString()} บาท</div>
                        <div class="chart-bar" style="width: 100%; background: #059669;"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    calculatorResult.style.display = 'block';
    calculatorResult.scrollIntoView({ behavior: 'smooth' });
    
    // Store form data for potential lead submission
    window.calculatorData = data;
    window.recommendedPackage = recommendedPackage;
});

function requestQuote(packageName) {
    // In a real implementation, this would submit to Google Sheets
    alert(`ขอบคุณสำหรับความสนใจในแพคเกจ ${packageName}! เราจะติดต่อกลับไปเพื่อส่งใบเสนอราคาให้คุณในเร็วๆ นี้`);
    
    // Here you would typically send data to Google Sheets API
    console.log('Quote requested for:', packageName);
    console.log('Customer data:', window.calculatorData);
    console.log('Package details:', window.recommendedPackage);
}

function contactUs() {
    // Scroll to contact section
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // In a real implementation, this would submit to a backend service
    alert('ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับไปในเร็วๆ นี้');
    
    // Reset form
    this.reset();
    
    console.log('Contact form submitted:', data);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.benefit-card, .system-card, .project-card, .warranty-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Trigger counter animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach((stat, index) => {
                const targets = [35, 5000, 30];
                setTimeout(() => {
                    animateCounter(stat, targets[index]);
                }, index * 200);
            });
            heroObserver.unobserve(entry.target);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
});

// Add CSS for calculator results
const resultStyles = `
<style>
.result-header {
    text-align: center;
    margin-bottom: 2rem;
}

.result-header h3 {
    color: white;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.result-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.package-card {
    background: rgba(255, 255, 255, 0.95);
    padding: 2rem;
    border-radius: 20px;
    color: #333;
}

.package-header {
    text-align: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #f0f0f0;
}

.package-header h4 {
    color: #1E3A8A;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.package-price {
    font-size: 2rem;
    font-weight: 700;
    color: #FF6B35;
}

.package-details {
    margin-bottom: 1.5rem;
}

.detail-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    background: #f8f9fa;
    border-radius: 10px;
}

.detail-item i {
    color: #FF6B35;
    width: 20px;
}

.package-description {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: #e8f4fd;
    border-radius: 10px;
    border-left: 4px solid #3B82F6;
}

.package-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.package-actions .btn {
    flex: 1;
    justify-content: center;
    min-width: 150px;
}

.savings-chart {
    background: rgba(255, 255, 255, 0.95);
    padding: 2rem;
    border-radius: 20px;
    color: #333;
}

.savings-chart h4 {
    color: #1E3A8A;
    margin-bottom: 1.5rem;
    text-align: center;
}

.chart-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.chart-item {
    position: relative;
}

.chart-label {
    font-weight: 600;
    color: #1E3A8A;
    margin-bottom: 0.5rem;
}

.chart-value {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.5rem;
}

.chart-bar {
    height: 8px;
    border-radius: 4px;
    transition: width 1s ease;
}

@media (max-width: 768px) {
    .result-content {
        grid-template-columns: 1fr;
    }
    
    .package-actions {
        flex-direction: column;
    }
    
    .package-actions .btn {
        width: 100%;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', resultStyles);

