export default function getDisplayName(CoreComponent) {
    return CoreComponent.displayName || CoreComponent.name || "Component";
}
