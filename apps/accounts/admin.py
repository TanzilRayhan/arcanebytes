from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import User


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = (
        "email",
        "pscore",
        "is_staff",
        "is_active",
        "created_at",
    )
    list_filter = (
        "email",
        "is_staff",
        "is_active",
        "created_at",
    )
    fieldsets = (
        (None, {"fields": ("email", "password")}),
        ("Personal Info", {"fields": ("img_url", "about", "pscore", "created_at")}),
        (
            "Permissions",
            {"fields": ("is_staff", "is_active", "groups", "user_permissions")},
        ),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "email",
                    "password1",
                    "password2",
                    "img_url",
                    "about",
                    "pscore",
                    "is_staff",
                    "is_active",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
    )
    readonly_fields = ("created_at",)
    search_fields = ("email",)
    ordering = ("email",)


admin.site.register(User, CustomUserAdmin)
