// ============================================================
// البيانات الوهمية للشبيترات (ستُستبدل بقاعدة بيانات لاحقاً)
// ============================================================
const chaptersData = [
    // ===== المستوى 1: كونكور =====
    {
        id: 1,
        level: 1,
        title: 'المعادلات من الدرجة الأولى',
        description: 'تعلم حل المعادلات البسيطة والمركبة مع تطبيقات عملية.',
        lessonsCount: 8,
        price: 500,
        icon: '📐',
        color: '#4a90d9'
    },
    {
        id: 2,
        level: 1,
        title: 'الهندسة الأساسية',
        description: 'المثلثات، الزوايا، والمضلعات مع تمارين متنوعة.',
        lessonsCount: 6,
        price: 450,
        icon: '📏',
        color: '#4a90d9'
    },
    {
        id: 3,
        level: 1,
        title: 'الإحصاء والبيانات',
        description: 'جمع البيانات، تمثيلها بيانياً، وتحليلها بشكل مبسط.',
        lessonsCount: 5,
        price: 400,
        icon: '📊',
        color: '#4a90d9'
    },

    // ===== المستوى 2: إعدادية =====
    {
        id: 4,
        level: 2,
        title: 'المعادلات والمتراجحات',
        description: 'حل المعادلات والمتراجحات من الدرجة الأولى والثانية.',
        lessonsCount: 10,
        price: 600,
        icon: '⚖️',
        color: '#27ae60'
    },
    {
        id: 5,
        level: 2,
        title: 'الهندسة الفضائية',
        description: 'المكعبات، الأسطوانات، والكرات مع حسابات الحجوم والمساحات.',
        lessonsCount: 8,
        price: 550,
        icon: '🌐',
        color: '#27ae60'
    },
    {
        id: 6,
        level: 2,
        title: 'الاحتمالات والإحصاء',
        description: 'مفاهيم الاحتمالات، التوزيعات، وتحليل البيانات المتقدمة.',
        lessonsCount: 7,
        price: 500,
        icon: '🎲',
        color: '#27ae60'
    },

    // ===== المستوى 3: باكالوريا =====
    {
        id: 7,
        level: 3,
        title: 'النهايات والاشتقاق',
        description: 'مفهوم النهاية، الاشتقاق، وتطبيقاته في الدوال.',
        lessonsCount: 12,
        price: 750,
        icon: '📈',
        color: '#d4a847'
    },
    {
        id: 8,
        level: 3,
        title: 'الدوال الأسية واللوغاريتمية',
        description: 'خصائص الدوال الأسية واللوغاريتمية مع تطبيقات عملية.',
        lessonsCount: 10,
        price: 700,
        icon: '📊',
        color: '#d4a847'
    },
    {
        id: 9,
        level: 3,
        title: 'التكامل وتطبيقاته',
        description: 'مفاهيم التكامل، حساب المساحات، وتطبيقات في الفيزياء.',
        lessonsCount: 10,
        price: 700,
        icon: '∫',
        color: '#d4a847'
    }
];

// ============================================================
// دالة عرض الشبيترات حسب المستوى المختار
// ============================================================
function renderChapters(level = 'all') {
    const grid = document.getElementById('chaptersGrid');
    
    // تصفية البيانات حسب المستوى
    let filteredChapters = chaptersData;
    if (level !== 'all') {
        filteredChapters = chaptersData.filter(ch => ch.level === parseInt(level));
    }

    // إذا لم توجد شبيترات
    if (filteredChapters.length === 0) {
        grid.innerHTML = `
            <div class="no-chapters">
                <span style="font-size: 3rem;">📭</span>
                <p>لا توجد شبيترات في هذا المستوى حالياً</p>
                <p style="color: var(--gray); font-size: 0.9rem;">سيتم إضافتها قريباً</p>
            </div>
        `;
        return;
    }

    // إنشاء بطاقات الشبيترات
    let cardsHTML = '';
    filteredChapters.forEach(chapter => {
        cardsHTML += `
            <div class="chapter-card" style="border-top-color: ${chapter.color};">
                <div class="chapter-icon">${chapter.icon}</div>
                <h3>${chapter.title}</h3>
                <p>${chapter.description}</p>
                <div class="chapter-meta">
                    <span><i class="fas fa-video"></i> ${chapter.lessonsCount} دروس</span>
                    <span><i class="fas fa-tag"></i> ${chapter.price} أو.ق</span>
                </div>
                <div class="chapter-actions">
                    <a href="chapter-detail.html?id=${chapter.id}" class="btn btn-outline">
                        <i class="fas fa-eye"></i> عرض التفاصيل
                    </a>
                </div>
                <div class="chapter-level-badge" style="background: ${chapter.color};">
                    ${chapter.level === 1 ? 'كونكور' : chapter.level === 2 ? 'إعدادية' : 'باكالوريا'}
                </div>
            </div>
        `;
    });

    grid.innerHTML = cardsHTML;
}

// ============================================================
// تفعيل أزرار التصفية
// ============================================================
function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            // إزالة التفعيل من جميع الأزرار
            buttons.forEach(b => b.classList.remove('active'));
            // تفعيل الزر الحالي
            this.classList.add('active');
            
            // الحصول على المستوى المختار
            const level = this.getAttribute('data-level');
            renderChapters(level);
        });
    });
}

// ============================================================
// تشغيل الكود عند تحميل الصفحة
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    // عرض جميع الشبيترات
    renderChapters('all');
    
    // تفعيل أزرار التصفية
    setupFilters();
    
    console.log('📚 صفحة الشبيترات جاهزة!');
});
