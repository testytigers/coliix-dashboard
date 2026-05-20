"use client"

import * as React from "react"
import { DashboardTemplate } from "@ux/react"

export default function DashboardPage() {
  return (
    <DashboardTemplate
      {...{
        "title": "Dashboard",
        "description": "Vue d'ensemble de vos colis et opérations",
        "stats": [
          {
            "label": "Total des colis",
            "value": "0"
          },
          {
            "label": "Nouveau colis",
            "value": "0"
          },
          {
            "label": "Colis pour ramassage",
            "value": "0"
          },
          {
            "label": "Colis livrés",
            "value": "0"
          }
        ],
        "statsCols": 4,
        "actions": [
          {
            "label": "Importer colis"
          },
          {
            "label": "Nouveau colis",
            "variant": "default"
          }
        ],
        "breadcrumbs": [
          {
            "label": "Coliix"
          },
          {
            "label": "Dashboard"
          }
        ],
        "appShell": {
          "header": {
            "brand": "Colis",
            "brandIcon": "Truck",
            "user": {
              "name": "Admin",
              "email": "admin@coliix.com",
              "menu": [
                {
                  "label": "Profil",
                  "href": "/profile"
                },
                {
                  "label": "Paramètres",
                  "href": "/settings"
                },
                {
                  "label": "Déconnexion",
                  "destructive": true
                }
              ]
            }
          },
          "sidebar": {
            "sections": [
              {
                "heading": "Principal",
                "items": [
                  {
                    "icon": "LayoutDashboard",
                    "label": "Dashboard",
                    "active": true
                  },
                  {
                    "icon": "Package",
                    "label": "Tout Colis"
                  },
                  {
                    "icon": "AlertCircle",
                    "label": "Besoin attention"
                  },
                  {
                    "icon": "Warehouse",
                    "label": "Colis de stock"
                  },
                  {
                    "icon": "FileText",
                    "label": "Bons de livraison"
                  },
                  {
                    "icon": "MessageSquare",
                    "label": "Réclamations"
                  },
                  {
                    "icon": "Edit",
                    "label": "Modifications colis"
                  },
                  {
                    "icon": "QrCode",
                    "label": "Scanner un arrivage"
                  }
                ]
              },
              {
                "heading": "Stock",
                "items": [
                  {
                    "icon": "Search",
                    "label": "Suivi de stock"
                  },
                  {
                    "icon": "PackageSearch",
                    "label": "Gestion de stock"
                  }
                ]
              },
              {
                "heading": "Bons",
                "items": [
                  {
                    "icon": "FileText",
                    "label": "Gestion des Bons"
                  },
                  {
                    "icon": "DollarSign",
                    "label": "Bons de paiement"
                  },
                  {
                    "icon": "RotateCcw",
                    "label": "Bons de retour"
                  },
                  {
                    "icon": "Send",
                    "label": "Bons d'envoie"
                  },
                  {
                    "icon": "PackageCheck",
                    "label": "Bons de distribution"
                  }
                ]
              },
              {
                "heading": "Finance",
                "items": [
                  {
                    "icon": "FileText",
                    "label": "Facture de client"
                  },
                  {
                    "icon": "Receipt",
                    "label": "Demandes"
                  },
                  {
                    "icon": "PackageSearch",
                    "label": "Retrait"
                  }
                ]
              },
              {
                "heading": "Administration",
                "items": [
                  {
                    "icon": "Building2",
                    "label": "Gestion Administrative"
                  },
                  {
                    "icon": "Users",
                    "label": "Clients"
                  },
                  {
                    "icon": "UserCheck",
                    "label": "Utilisateurs"
                  },
                  {
                    "icon": "SearchCheck",
                    "label": "Demande vérifications"
                  },
                  {
                    "icon": "Wallet",
                    "label": "Trésorerie"
                  },
                  {
                    "icon": "Wrench",
                    "label": "Dépenses"
                  }
                ]
              },
              {
                "heading": "Système",
                "items": [
                  {
                    "icon": "Settings",
                    "label": "Paramètres"
                  },
                  {
                    "icon": "Wrench",
                    "label": "Outils & Support"
                  },
                  {
                    "icon": "User",
                    "label": "Profil de l'entreprise"
                  },
                  {
                    "icon": "Shield",
                    "label": "Politique confidentialité"
                  },
                  {
                    "icon": "Mail",
                    "label": "Newsletter"
                  },
                  {
                    "icon": "HelpCircle",
                    "label": "Gestion FAQ"
                  }
                ]
              }
            ],
            "width": 240
          }
        }
      }}
    />
  )
}
