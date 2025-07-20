import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "page_title": "Page Form",
            "pet_name": "Pet Name",
            "pet_type": "Pet Type",
            "pet_age": "Age",
            "pet_health": "Health Status",
            "save": "Save",
            "edit": "Edit",
            "delete": "Delete",
            "comments": "Comments",
            "add_comment": "Add Comment",
            "pet_list": "Pets",
            "pet_form": "Pet Form",
            "add_pet": "Add Pet",
            "name_placeholder": "Enter pet's name",
            "type_placeholder": "Cat, Dog, etc.",
            "age_placeholder": "Enter age",
            "health_placeholder": "Enter health status",
            "select_language": "Select Language"
        }
    },
    tr: {
        translation: {
            "page_title": "Pet Takip",
            "pet_name": "Pet Adı",
            "pet_type": "Pet Türü",
            "pet_age": "Yaş",
            "pet_health": "Sağlık Durumu",
            "save": "Kaydet",
            "edit": "Düzenle",
            "delete": "Sil",
            "comments": "Yorumlar",
            "add_comment": "Yorum Ekle",
            "pet_list": "Petler",
            "pet_form": "Pet Ekleme Formu",
            "add_pet": "Pet Ekle",
            "name_placeholder": "Pet adını girin",
            "type_placeholder": "Kedi, Köpek, vb.",
            "age_placeholder": "Yaş girin",
            "health_placeholder": "Sağlık durumu girin",
            "select_language": "Dil Seç"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // Varsayılan dil
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
