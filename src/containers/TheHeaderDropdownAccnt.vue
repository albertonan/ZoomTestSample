<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            src="img/avatars/default.jpg"
            class="c-avatar-img "
          />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>{{$i18n.t("user.account")}}</strong>
    </CDropdownHeader>
    <CDropdownItem @click="setLang('en')">
      {{$i18n.t("user.logout")}}
    </CDropdownItem>
  </CDropdown>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      selectedLang: Cookies.get("lang") == "es" ? "es" : "en"
    }
  },
  methods: {
    setLang(newLang){
      Cookies.set("lang", newLang);
      window.location.reload();
    }
  }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>