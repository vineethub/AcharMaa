# 🎨 AcharMaa – Design & Development Guidelines

## 📱 1. Core Principle (VERY IMPORTANT)

> Mobile First → Then Tablet → Then Desktop

* All pages must be designed for **phone view first**
* Desktop is just an extension (not redesign)
* Avoid desktop-only layouts

---

## 🎯 2. Design Goal

* Clean & modern UI
* Warm “homemade food” feel
* Fast & simple (quick commerce style)
* Consistent across all pages

---

## 🎨 3. Color System

### Primary Color

* Orange: **#D35400**
* Used for:

  * Buttons
  * Highlights
  * Active states

### Background Color

* Light Cream: **#FFF5E1**
* Used as main app background

### Card Color

* White: **#FFFFFF**

### Hover / Active

* Darker Orange: **#b84300**

### Text Colors

* Primary text: Black / Dark Gray
* Secondary text: Gray (Tailwind `text-gray-500`)

---

## 🔤 4. Typography

* Font: Default system font (Tailwind)
* Headings:

  * `text-lg` / `text-xl` / `text-2xl`
  * `font-bold`
* Body:

  * `text-sm`
* Small text:

  * `text-xs`

---

## 📦 5. Spacing System

Use consistent spacing everywhere:

* Page padding:

  * Mobile: `px-4`
  * Desktop: `md:px-8`

* Section spacing:

  * `mt-6`

* Card padding:

  * `p-3`

* Grid gap:

  * `gap-4`

👉 Do NOT randomly change spacing

---

## 🧱 6. Layout Rules

### Container

* Always use:

```html
<div class="max-w-6xl mx-auto">
```

### Page Structure

1. Header
2. Content Sections
3. Bottom Navigation (mobile)

---

## 🧩 7. Components (Reuse Only)

### 🔘 Buttons

```html
bg-[#D35400] text-white text-sm py-1.5 rounded-lg
```

Hover:

```html
hover:bg-[#b84300]
```

---

### 🧾 Cards (Product / Category)

```html
bg-white rounded-xl p-3 shadow 
hover:shadow-lg hover:-translate-y-1 transition
```

---

### 🧭 Category Card

```html
bg-white rounded-xl p-3 text-center shadow
```

---

### 🛒 Bottom Navigation (Mobile)

* Fixed bottom
* 4 items: Home, Shop, Cart, Profile
* Active item:

```html
text-[#D35400]
```

---

## 📱 8. Responsive Rules

### Mobile (default)

* 2 column grid:

```html
grid grid-cols-2
```

### Tablet

```html
md:grid-cols-3
```

### Desktop

```html
lg:grid-cols-4
```

---

## 🧭 9. Navigation Rules

* Header must be same on all pages
* Bottom nav must be same on all pages
* Active page should be highlighted

---

## 🛍️ 10. Product UI Rules

Each product card must include:

* Image
* Name
* Price
* Add button

Do NOT:

* Add extra clutter
* Change button style per page

---

## ⚠️ 11. Strict Rules (DO NOT BREAK)

* ❌ No random colors

* ❌ No different button styles

* ❌ No different card styles

* ❌ No redesign per page

* ✅ Reuse same UI components

* ✅ Maintain spacing consistency

* ✅ Keep design minimal

---

## 🚀 12. Development Priority

### Phase 1 (Current)

* Mobile UI consistency
* Complete user flow

### Phase 2

* Tablet optimization

### Phase 3

* Desktop polish

---

## 🧠 13. Final Principle

> Same components + same spacing + same colors = consistent app

If any page looks different → it is WRONG

---

# ✅ Conclusion

This document ensures:

* All pages look same
* UI is consistent
* Development is faster

Follow this strictly for every new page.
