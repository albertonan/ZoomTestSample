<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
    <img 
        class="c-sidebar-brand-minimized" 
        src="../assets/icons/Inta_logo.png" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 110 134"
      />
      <!--<CIcon name="logo" height="48" alt="Logo" />-->
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/configuration">
          {{ $i18n.t("menu.config") }}
        </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <!--<CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-bell" />
        </CHeaderNavLink>
      </CHeaderNavItem>-->
      <CDropdown
        inNav
        class="c-header-nav-items"
        placement="bottom-end"
        add-menu-classes="pt-0"
      >
        <template #toggler>
          <CHeaderNavLink>
            <CIcon name="cil-translate" />
          </CHeaderNavLink>
        </template>
        <CDropdownHeader tag="div" class="text-center" color="light">
          <strong>{{ $i18n.t("languages.title") }}</strong>
        </CDropdownHeader>
        <CDropdownItem @click="setLang('es')">
          <CIcon name="cif-es" /> {{ $i18n.t("languages.spanish") }}
          <CBadge v-if="selectedLang == 'es'" color="info" class="mfs-auto">{{
            $i18n.t("languages.selected")
          }}</CBadge>
        </CDropdownItem>
        <CDropdownItem @click="setLang('en')">
          <CIcon name="cif-us" /> {{ $i18n.t("languages.english") }}
          <CBadge
            v-if="selectedLang == 'en'"
            color="success"
            class="mfs-auto"
            >{{ $i18n.t("languages.selected") }}</CBadge
          >
        </CDropdownItem>
      </CDropdown>
      <!--<TheHeaderDropdownAccnt />-->
    </CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0 mb-0" />
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from "./TheHeaderDropdownAccnt";
import Cookies from 'js-cookie';


export default {
  name: "TheHeader",
  components: {
    TheHeaderDropdownAccnt,
  },
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
};
</script>
