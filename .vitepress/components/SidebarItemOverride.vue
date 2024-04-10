<script setup lang="ts">
/**
 * The entire component has to be recreated since it's recursive
 * As a result, pretty much all this code is directly ripped from VitePress
 * ! Won't update if the VitePress component changes
 */

import { computed } from "vue";
import type { DefaultTheme } from "vitepress/theme";
import { useSidebarControl } from "vitepress/dist/client/theme-default/composables/sidebar";
import VPLink from "vitepress/dist/client/theme-default/components/VPLink.vue";
import VPBadge from "vitepress/dist/client/theme-default/components/VPBadge.vue";

/**
 * Check if a YYYY-MM-DD date is older than one month
 * @author Juknum
 * @param date YYYY-MM-DD date to check
 * @returns whether it is
 */
function isNew(date?: string) {
	if (!date) return false;
	const delayedDate = new Date();
	delayedDate.setMonth(delayedDate.getMonth() - 1);
	return new Date(date).getTime() > delayedDate.getTime();
}

interface SidebarItemOverride extends DefaultTheme.SidebarItem {
	date?: string;
	archived?: boolean;
	deprecated?: boolean;
	items?: SidebarItemOverride[];
}

const props = defineProps<{
	item: SidebarItemOverride;
	depth: number;
}>();

const { collapsed, collapsible, isLink, isActiveLink, hasActiveLink, hasChildren, toggle } =
	useSidebarControl(computed(() => props.item));

const sectionTag = computed(() => (hasChildren.value ? "section" : `div`));

const linkTag = computed(() => (isLink.value ? "a" : "div"));

const textTag = computed(() => {
	return !hasChildren.value ? "p" : props.depth + 2 === 7 ? "p" : `h${props.depth + 2}`;
});

const itemRole = computed(() => (isLink.value ? undefined : "button"));

const classes = computed(() => [
	[`level-${props.depth}`],
	{ collapsible: collapsible.value },
	{ collapsed: collapsed.value },
	{ "is-link": isLink.value },
	{ "is-active": isActiveLink.value },
	{ "has-active": hasActiveLink.value },
]);

function onItemInteraction(e: MouseEvent | Event) {
	if ("key" in e && e.key !== "Enter") {
		return;
	}
	!props.item.link && toggle();
}

function onCaretClick() {
	props.item.link && toggle();
}
</script>

<template>
	<component
		:is="sectionTag"
		class="SidebarItemOverride"
		:class="classes"
	>
		<div
			v-if="item.text"
			class="item"
			:role="itemRole"
			v-on="item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {}"
			:tabindex="item.items && 0"
		>
			<div class="indicator" />

			<VPLink
				v-if="item.link"
				:tag="linkTag"
				class="link"
				:href="item.link"
				:rel="item.rel"
				:target="item.target"
			>
				<component
					:is="textTag"
					class="text"
					v-html="item.text"
				/>
				<VPBadge
					class="small"
					v-if="isNew(item.date)"
					type="danger"
					text="NEW"
				/>
				<VPBadge
					class="small"
					v-if="item.deprecated"
					type="warning"
					text="DEPRECATED"
				/>
				<VPBadge
					class="small"
					v-if="item.archived"
					type="info"
					text="ARCHIVED"
				/>
			</VPLink>
			<component
				v-else
				:is="textTag"
				class="text"
				v-html="item.text"
			/>

			<div
				v-if="item.collapsed != null && item.items && item.items.length"
				class="caret"
				role="button"
				aria-label="toggle section"
				@click="onCaretClick"
				@keydown.enter="onCaretClick"
				tabindex="0"
			>
				<span class="vpi-chevron-right caret-icon" />
			</div>
		</div>

		<div
			v-if="item.items && item.items.length"
			class="items"
		>
			<template v-if="depth < 5">
				<SidebarItemOverride
					v-for="i in item.items"
					:key="i.text"
					:item="i"
					:depth="depth + 1"
				/>
			</template>
		</div>
	</component>
</template>

<style scoped>
.SidebarItemOverride.level-0 {
	padding-bottom: 24px;
}

.SidebarItemOverride.collapsed.level-0 {
	padding-bottom: 10px;
}

.item {
	position: relative;
	display: flex;
	width: 100%;
}

.SidebarItemOverride.collapsible > .item {
	cursor: pointer;
}

.indicator {
	position: absolute;
	top: 6px;
	bottom: 6px;
	left: -17px;
	width: 2px;
	border-radius: 2px;
	transition: background-color 0.25s;
}

.SidebarItemOverride.level-2.is-active > .item > .indicator,
.SidebarItemOverride.level-3.is-active > .item > .indicator,
.SidebarItemOverride.level-4.is-active > .item > .indicator,
.SidebarItemOverride.level-5.is-active > .item > .indicator {
	background-color: var(--vp-c-brand-1);
}

.link {
	display: flex;
	align-items: center;
	flex-grow: 1;
}

.small {
	scale: 0.8;
	vertical-align: super;
}

.text {
	flex-grow: 1;
	padding: 4px 0;
	line-height: 24px;
	font-size: 14px;
	transition: color 0.25s;
}

.SidebarItemOverride.level-0 .text {
	font-weight: 700;
	color: var(--vp-c-text-1);
}

.SidebarItemOverride.level-1 .text,
.SidebarItemOverride.level-2 .text,
.SidebarItemOverride.level-3 .text,
.SidebarItemOverride.level-4 .text,
.SidebarItemOverride.level-5 .text {
	font-weight: 500;
	color: var(--vp-c-text-2);
}

.SidebarItemOverride.level-0.is-link > .item > .link:hover .text,
.SidebarItemOverride.level-1.is-link > .item > .link:hover .text,
.SidebarItemOverride.level-2.is-link > .item > .link:hover .text,
.SidebarItemOverride.level-3.is-link > .item > .link:hover .text,
.SidebarItemOverride.level-4.is-link > .item > .link:hover .text,
.SidebarItemOverride.level-5.is-link > .item > .link:hover .text {
	color: var(--vp-c-brand-1);
}

.SidebarItemOverride.level-0.has-active > .item > .text,
.SidebarItemOverride.level-1.has-active > .item > .text,
.SidebarItemOverride.level-2.has-active > .item > .text,
.SidebarItemOverride.level-3.has-active > .item > .text,
.SidebarItemOverride.level-4.has-active > .item > .text,
.SidebarItemOverride.level-5.has-active > .item > .text,
.SidebarItemOverride.level-0.has-active > .item > .link > .text,
.SidebarItemOverride.level-1.has-active > .item > .link > .text,
.SidebarItemOverride.level-2.has-active > .item > .link > .text,
.SidebarItemOverride.level-3.has-active > .item > .link > .text,
.SidebarItemOverride.level-4.has-active > .item > .link > .text,
.SidebarItemOverride.level-5.has-active > .item > .link > .text {
	color: var(--vp-c-text-1);
}

.SidebarItemOverride.level-0.is-active > .item .link > .text,
.SidebarItemOverride.level-1.is-active > .item .link > .text,
.SidebarItemOverride.level-2.is-active > .item .link > .text,
.SidebarItemOverride.level-3.is-active > .item .link > .text,
.SidebarItemOverride.level-4.is-active > .item .link > .text,
.SidebarItemOverride.level-5.is-active > .item .link > .text {
	color: var(--vp-c-brand-1);
}

.caret {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: -7px;
	width: 32px;
	height: 32px;
	color: var(--vp-c-text-3);
	cursor: pointer;
	transition: color 0.25s;
	flex-shrink: 0;
}

.item:hover .caret {
	color: var(--vp-c-text-2);
}

.item:hover .caret:hover {
	color: var(--vp-c-text-1);
}

.caret-icon {
	font-size: 18px;
	transform: rotate(90deg);
	transition: transform 0.25s;
}

.SidebarItemOverride.collapsed .caret-icon {
	transform: rotate(0);
}

.SidebarItemOverride.level-1 .items,
.SidebarItemOverride.level-2 .items,
.SidebarItemOverride.level-3 .items,
.SidebarItemOverride.level-4 .items,
.SidebarItemOverride.level-5 .items {
	border-left: 1px solid var(--vp-c-divider);
	padding-left: 16px;
}

.SidebarItemOverride.collapsed .items {
	display: none;
}
</style>
